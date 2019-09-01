let pkg = require("../pkg.js");
pkg.types.loadTypes("../tmp/combined.json");
let berr = require("../util/error.js");
let bconst = require("../util/constant.js");

// phase0: 
//  env.admin = accts[0]
//  user1-2 = accts[1-2]
//  factory = new factory
module.exports.phase0 = async (web3) => {
    let env = {};
    env.accts = await web3.eth.getAccounts();
    env.admin = env.accts[0];
    env.user1 = env.accts[1];
    env.user2 = env.accts[2];
    let deploy = (w, a, t) => pkg.deploy(web3, env.admin, t);
    env.factory = await deploy(web3, env.admin, "BFactory");
    return env;
}

// phase1:
//  bpool = new bpool
//  poolcoin = bpool.getPoolToken
//  acoin,bcoin,ccoin = new btokens
//  *coin.mint( MAX )
//    --> *coin.balance == MAX
//  *coin.approve(bpool)
module.exports.phase1 = async (web3) => {
    let env = await module.exports.phase0(web3);
    let deploy = (w, a, t) => pkg.deploy(web3, env.admin, t);
    var fn_newBPool = await env.factory.methods.newBPool();
    let bpoolAddr = await fn_newBPool.call();
    env.bpool = new web3.eth.Contract(JSON.parse(pkg.types.types.BPool.abi), bpoolAddr);
    await fn_newBPool.send({from: env.admin, gas:0xffffffff});
    let poolcoinAddr = await env.bpool.methods.getPoolToken().call();
    env.poolcoin = new web3.eth.Contract(JSON.parse(pkg.types.types.BToken.abi), poolcoinAddr);

    env.acoin = await pkg.deploy(web3, env.admin, "BToken", [web3.utils.toHex("A")]);
    env.bcoin = await pkg.deploy(web3, env.admin, "BToken", [web3.utils.toHex("B")]);
    env.ccoin = await pkg.deploy(web3, env.admin, "BToken", [web3.utils.toHex("C")]);

    env.acoin.methods.mint(web3.utils.toTwosComplement('-1')).send({from: env.admin});
    env.bcoin.methods.mint(web3.utils.toTwosComplement('-1')).send({from: env.admin});
    env.ccoin.methods.mint(web3.utils.toTwosComplement('-1')).send({from: env.admin});

    env.acoin.methods.approve(env.bpool._address, web3.utils.toTwosComplement('-1'))
             .send({from: env.admin});
    env.bcoin.methods.approve(env.bpool._address, web3.utils.toTwosComplement('-1'))
             .send({from: env.admin});
    env.ccoin.methods.approve(env.bpool._address, web3.utils.toTwosComplement('-1'))
             .send({from: env.admin});


    return env;
}

// phase2:
//  initWeight = toWei(10)
//  initBalance = toWei(1000)
//  bpool.bind(*coin, initWeight, initBalance)
module.exports.phase2 = async (web3) => {
    let env = await module.exports.phase1(web3);
    let deploy = (w, a, t) => pkg.deploy(web3, env.admin, t);

    env.initWeight = web3.utils.toWei('10');
    env.initBalance = web3.utils.toWei('10');

    await env.bpool.methods.bind(env.acoin._address, env.initBalance, env.initWeight)
                           .send({from: env.admin, gas:0xffffffff});
    await env.bpool.methods.bind(env.bcoin._address, env.initBalance, env.initWeight)
                           .send({from: env.admin, gas:0xffffffff});
    await env.bpool.methods.bind(env.ccoin._address, env.initBalance, env.initWeight)
                           .send({from: env.admin, gas:0xffffffff});

    await env.bpool.methods.start()
                           .send({from: env.admin, gas:0xffffffff});

    return env;
}

//  admin: *coin.move(admin, user*, initBalance)
//  user: *coin.trusts(bpool, true)
//  user: poolcoin.trusts(bpool)
module.exports.phase3 = async (web3) => {
    let env = await module.exports.phase2(web3);
    let deploy = (w, a, t) => pkg.deploy(web3, env.admin, t);
    let c = await deploy(web3, env.admin, "BConst");
    let e = await deploy(web3, env.admin, "BError");
    berr.ERR_NONE = await e.methods.ERR_NONE().call();

    berr.ERR_MATH_ADD_OVERFLOW  = await e.methods.ERR_MATH_ADD_OVERFLOW().call();
    berr.ERR_MATH_SUB_UNDERFLOW = await e.methods.ERR_MATH_SUB_UNDERFLOW().call();
    berr.ERR_MATH_MUL_OVERFLOW  = await e.methods.ERR_MATH_MUL_OVERFLOW().call();
    berr.ERR_MATH_DIV_ZERO      = await e.methods.ERR_MATH_DIV_ZERO().call();
    berr.ERR_MATH_DIV_INTERFLOW = await e.methods.ERR_MATH_DIV_INTERFLOW().call();

    berr.ERR_MAX_TOKENS       = await e.methods.ERR_MAX_TOKENS().call();
    berr.ERR_MIN_WEIGHT       = await e.methods.ERR_MIN_WEIGHT().call();
    berr.ERR_MAX_WEIGHT       = await e.methods.ERR_MAX_WEIGHT().call();
    berr.ERR_MAX_TOTAL_WEIGHT = await e.methods.ERR_MAX_TOTAL_WEIGHT().call();
    berr.ERR_MAX_FEE          = await e.methods.ERR_MAX_FEE().call();
    berr.ERR_MIN_BALANCE      = await e.methods.ERR_MIN_BALANCE().call();
    berr.ERR_MAX_BALANCE      = await e.methods.ERR_MAX_BALANCE().call();
    berr.ERR_MAX_TRADE        = await e.methods.ERR_MAX_TRADE().call();

    // TODO: 3 limit types (in, out, price)
    berr.ERR_LIMIT_FAILED = await e.methods.ERR_LIMIT_FAILED().call();

    berr.ERR_OUT_OF_RANGE = await e.methods.ERR_OUT_OF_RANGE().call();


    berr.ERR_NOT_BOUND     = await e.methods.ERR_NOT_BOUND().call();
    berr.ERR_ALREADY_BOUND = await e.methods.ERR_ALREADY_BOUND().call();

    berr.ERR_PAUSED     = await e.methods.ERR_PAUSED().call();
    berr.ERR_UNJOINABLE = await e.methods.ERR_UNJOINABLE().call();
    berr.ERR_BAD_CALLER = await e.methods.ERR_BAD_CALLER().call();

    berr.ERR_ERC20_FALSE = await e.methods.ERR_ERC20_FALSE().call();
    
    berr.ERR_UNREACHABLE = await e.methods.ERR_UNREACHABLE().call();

    bconst.MAX_BOUND_TOKENS      = await c.methods.MAX_BOUND_TOKENS().call();
    bconst.BONE                  = await c.methods.BONE().call();
    bconst.MAX_FEE               = web3.utils.fromWei(await c.methods.MAX_FEE().call());
    bconst.MIN_TOKEN_WEIGHT      = web3.utils.fromWei(await c.methods.MIN_TOKEN_WEIGHT().call());
    bconst.MAX_TOKEN_WEIGHT      = web3.utils.fromWei(await c.methods.MAX_TOKEN_WEIGHT().call());
    bconst.MAX_TOTAL_WEIGHT      = web3.utils.fromWei(await c.methods.MAX_TOTAL_WEIGHT().call());
    bconst.MIN_TOKEN_BALANCE     = web3.utils.fromWei(await c.methods.MIN_TOKEN_BALANCE().call());
    bconst.MAX_TOKEN_BALANCE     = web3.utils.fromWei(await c.methods.MAX_TOKEN_BALANCE().call());
    bconst.MAX_TRADE_IN          = web3.utils.fromWei(await c.methods.MAX_TRADE_IN().call());
    bconst.MAX_TRADE_OUT         = web3.utils.fromWei(await c.methods.MAX_TRADE_OUT().call());
    bconst.MIN_SLIP_PRICE        = web3.utils.fromWei(await c.methods.MIN_SLIP_PRICE().call());


    for( user of [env.admin, env.user1, env.user2] ) {
        for( coin of [env.acoin, env.bcoin, env.ccoin] ) {
            await coin.methods.transfer(user, env.initBalance)
                      .send({from: env.admin});
            // DSToken MAX_U256 means infinite allowance
            await coin.methods.approve(env.bpool._address, web3.utils.toTwosComplement("-1"))
                      .send({from: user});
        }
        await env.poolcoin.methods.approve(env.bpool._address, web3.utils.toTwosComplement("-1"))
                          .send({from: user});

    }
    return env;
}
