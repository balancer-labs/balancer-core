// [result
// , [args...] ]
module.exports.math = {
    // Ao = OutGivenIn(Bi, Wi, Bo, Wo, Ai, fee)
    "calc_OutGivenIn": [
      [[250, 250, 50], [0.2, 0.2, 0.2], [5, 10, 5], [250, 250, 50], [0.2, 0.2, 0.2], [0, 0.02, 0.01]]
    ],
        /*
    , [(1 - Math.pow((20/(20+10)),(0.1/0.1))) * 20
        , [20, 0.1, 20, 0.1, 10, 0] ]
    , [(1 - Math.pow((200/(200+1)),(0.5/0.3))) * 20
        , [200, 0.5, 20, 0.3, 1, 0] ]
    , [(1 - Math.pow((235/(235+32)),(0.5/0.2)))*150, [235, 0.5, 150, 0.2, 32, 0 ] ]
    , [(1 - Math.pow((2/(2+1*0.98)),(0.1/0.1))) * 2, [2, 0.1, 2, 0.1, 1, 0.02 ] ]
    , [(1 - Math.pow((20/(20+10*0.99)),(0.1/0.1))) * 20, [20, 0.1, 20, 0.1, 10, 0.01 ] ]
    , [(1 - Math.pow((200/(200+1*0.97)),(0.5/0.3))) * 20, [200, 0.5, 20, 0.3, 1, 0.03 ] ]
    , [(1 - Math.pow((235/(235+32*0.9)),(0.5/0.2)))*150, [235, 0.5, 150, 0.2, 32, 0.1 ] ]
    */
    //],

    "calc_InGivenOut": [
      [[250, 250, 50], [0.2, 0.2, 0.2], [250, 250, 50], [0.2, 0.2, 0.2], [5, 10, 5], [0, 0.02, 0.01]]
    ],
        
        /*
        [
        [(Math.pow((2/(2 - 1)), (0.1/0.1)) - 1) * 2,
            [2, 0.1, 2, 0.1, 1, 0 ] ],
        [(Math.pow((20/(20 - 10)), (0.1/0.1)) - 1) * 20, 
            [20, 0.1, 20, 0.1, 10,  0] ],
        [(Math.pow((600/(600 - 4)), (0.3/0.5)) - 1) * 523,
            [523, 0.5, 600, 0.3, 4,  0] ],
        [(Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600,
            [600, 0.5, 523, 0.2, 70,  0] ],
        [(Math.pow((2/(2 - 1)), (0.1/0.1)) - 1) * 2 / 0.98,
            [2, 0.1, 2, 0.1, 1,  0.02 ] ],
        [(Math.pow((20/(20 - 10)), (0.1/0.1)) - 1) * 20 / 0.99,
            [20, 0.1, 20, 0.1, 10,  0.01 ] ],
        [(Math.pow((600/(600 - 4)), (0.3/0.5)) - 1) * 523 / 0.97,
            [523, 0.5, 600, 0.3, 4,  0.03 ] ],
        [(Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600 / 0.9,
            [600, 0.5, 523, 0.2, 70,  0.1 ] ]
    ],
    */


    // res = calc_InGivenPrice(Bi, Wi, Bo, Wo, SER1, fee)
    "calc_InGivenPrice": [
        [ 1.08172405558, [ 10, 0.3, 5260, 0.3, 430, 0.02 ] ],
        [ 1.06008957447, [ 10, 0.3, 5260, 0.3, 430, 0 ] ],
        [ 0.12011996945, [ 10, 0.2, 4405, 0.1, 850, 0 ] ],
        [ 0,             [ 10, 0.5, 8810, 0.5, 881, 0 ] ],
        [ 0.97653399825, [ 10, 0.2, 4600, 0.4, 200, 0 ] ],
        [ 1.08172405558, [ 10, 0.3, 5260, 0.3, 430, 0.02 ] ],
        [ 0.12133330247, [ 10, 0.2, 4405, 0.1, 850, 0.01 ] ],
        [ 0,             [ 10, 0.5, 8810, 0.5, 881, 0.03 ] ],
        [ 1.08503777583, [ 10, 0.2, 4600, 0.4, 200, 0.1 ] ]
    ],

    "calc_SpotPrice": [
        [4, [1, 0.2, 10, 0.5 ] ],
        [1/4, [10, 0.5, 1, 0.2 ] ],

        [0.00025, [6000, 0.3, 1, 0.2 ] ],
        [1/0.00025, [1, 0.2, 6000, 0.3 ] ],

        [1000, [10, 0.5, 6000, 0.3 ] ],
        [1/1000, [6000, 0.3, 10, 0.5 ] ]
    ],
}


module.exports.spotPricePoints = [

    {res: 4, Bi: 1, Wi: 0.2, Bo: 10, Wo: 0.5},
    {res: 1/4, Bi: 10, Wi: 0.5, Bo: 1, Wo: 0.2},

    {res: 0.00025, Bi: 6000, Wi: 0.3, Bo: 1, Wo: 0.2},
    {res: 1/0.00025, Bi: 1, Wi: 0.2, Bo: 6000, Wo: 0.3},

    {res: 1000, Bi: 10, Wi: 0.5, Bo: 6000, Wo: 0.3},
    {res: 1/1000, Bi: 6000, Wi: 0.3, Bo: 10, Wo: 0.5}
];

module.exports.StopOutGivenInPoints = [
    {res: (1 - Math.pow((235/(235+32)),(0.5/0.2)))*150, Bi: 235, Wi: 0.5, Bo: 150, Wo: 0.2, Ai: 32, fee: 0, 
        Lo: 0},
    {res: (1 - Math.pow((235/(235+32)),(0.5/0.2)))*150, Bi: 235, Wi: 0.5, Bo: 150, Wo: 0.2, Ai: 32, fee: 0, 
        Lo: (1 - Math.pow((235/(235+32)),(0.5/0.2)))*150 - 1},
    {res: (1 - Math.pow((235/(235+32)),(0.5/0.2)))*150, Bi: 235, Wi: 0.5, Bo: 150, Wo: 0.2, Ai: 32, fee: 0, 
        Lo: (1 - Math.pow((235/(235+32)),(0.5/0.2)))*150},
    //    NO REVERT TESTING YET
//    {res: (1 - Math.pow((235/(235+32)),(0.5/0.2)))*150, Bi: 235, Wi: 0.5, Bo: 150, Wo: 0.2, Ai: 32, fee: 0, 
//        Lo: (1 - Math.pow((235/(235+32)),(0.5/0.2)))*150 + 1},
]

module.exports.calc_InGivenOutPoints = [
    {res: (Math.pow((2/(2 - 1)), (0.1/0.1)) - 1) * 2, Bi: 2, Wi: 0.1, Bo: 2, Wo: 0.1, Ao: 1, fee: 0},//2
    {res: (Math.pow((20/(20 - 10)), (0.1/0.1)) - 1) * 20, Bi: 20, Wi: 0.1, Bo: 20, Wo: 0.1, Ao: 10, fee: 0},//20
    {res: (Math.pow((600/(600 - 4)), (0.3/0.5)) - 1) * 523, Bi: 523, Wi: 0.5, Bo: 600, Wo: 0.3, Ao: 4, fee: 0},
    {res: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: 70, fee: 0},
    {res: (Math.pow((2/(2 - 1)), (0.1/0.1)) - 1) * 2 / 0.98, Bi: 2, Wi: 0.1, Bo: 2, Wo: 0.1, Ao: 1, fee: 0.02},//2
    {res: (Math.pow((20/(20 - 10)), (0.1/0.1)) - 1) * 20 / 0.99, Bi: 20, Wi: 0.1, Bo: 20, Wo: 0.1, Ao: 10, fee: 0.01},//20
    {res: (Math.pow((600/(600 - 4)), (0.3/0.5)) - 1) * 523 / 0.97, Bi: 523, Wi: 0.5, Bo: 600, Wo: 0.3, Ao: 4, fee: 0.03},
    {res: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600 / 0.9, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: 70, fee: 0.1},
]

module.exports.MaxInExactOutPoints = [
//    {res: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: 70, fee: 0,
//        Li: 0},
//    {res: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: 70, fee: 0,
//        Li: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600},
    {res: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: 70, fee: 0,
        Li: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600 + 1},
    {res: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: 70, fee: 0,
        Li: (Math.pow((523/(523 - 70)), (0.2/0.5)) - 1) * 600 + 100},
]

let priceRatio   = 0.95
let Ai_fromPrice = (Math.pow(1/priceRatio, 0.2/(0.2+0.5)) - 1) * 235
module.exports.ExactInLimitPricePoints = [
    {res: (1 - Math.pow((235/(235+Ai_fromPrice)),(0.5/0.2)))*150, Bi: 235, Wi: 0.5, Bo: 150, Wo: 0.2, Ai: Ai_fromPrice, fee: 0, 
        Lp: (150/0.2)/(235/0.5) * priceRatio},
    //lower Ai
    {res: (1 - Math.pow((235/(235+(Ai_fromPrice - 0.001))),(0.5/0.2)))*150, Bi: 235, Wi: 0.5, Bo: 150, Wo: 0.2, Ai: Ai_fromPrice - 0.001, fee: 0, 
        Lp: (150/0.2)/(235/0.5) * priceRatio},
    //lower Lp
    {res: (1 - Math.pow((235/(235+(Ai_fromPrice - 0.001))),(0.5/0.2)))*150, Bi: 235, Wi: 0.5, Bo: 150, Wo: 0.2, Ai: Ai_fromPrice - 0.001, fee: 0, 
        Lp: (150/0.2)/(235/0.5) * priceRatio * 0.95},
]

Ai_fromPrice = (Math.pow(1/priceRatio, 0.2/(0.2+0.5)) - 1) * 600
let Ao_fromPrice = (1 - (600/(600 + Ai_fromPrice))**(0.5/0.2)) * 523
module.exports.LimitPriceInExactOutPoints = [
    {res: Ai_fromPrice, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: Ao_fromPrice, fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio},
    //continuity
    {res: (Math.pow(523/(523-(Ao_fromPrice)),0.2/0.5) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: (Ao_fromPrice), fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio},
    //lower Lp
    {res: (Math.pow(523/(523-(Ao_fromPrice)),0.2/0.5) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: (Ao_fromPrice), fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio * 0.95},
    //lower Ao
    {res: (Math.pow(523/(523-(Ao_fromPrice-0.001)),0.2/0.5) - 1) * 600, Bi: 600, Wi: 0.5, Bo: 523, Wo: 0.2, Ao: (Ao_fromPrice - 0.001), fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio},
]

let Lo = Ao_fromPrice - 1;
let Li = (Math.pow(1/0.95, 0.2/(0.2 + 0.5)) - 1) * 600
let tokenRatio = 0.95
module.exports.MaxInMinOutLimitPricePoints = [
    // Lp success
    {res: [ (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600, 
            (1 - (600/(600 + (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600))**(0.5/0.2)) * 523], 
        Bi: 600, Wi: 0.5, 
        Li: Ai_fromPrice/tokenRatio, 
        Bo: 523, Wo: 0.2, 
        Lo: Ao_fromPrice*tokenRatio, 
        fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio},
    {res: [ (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600, 
            (1 - (600/(600 + (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600))**(0.5/0.2)) * 523], 
        Bi: 600, Wi: 0.5, 
        Li: Ai_fromPrice/(tokenRatio*tokenRatio), 
        Bo: 523, Wo: 0.2, 
        Lo: Ao_fromPrice*(tokenRatio*tokenRatio), 
        fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio},
 
    // Lp fails on low Li
    {res: [ (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600 * tokenRatio, 
            (1 - (600/(600 + (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600 * tokenRatio))**(0.5/0.2)) * 523], 
        Bi: 600, Wi: 0.5, 
        Li: Ai_fromPrice * tokenRatio, 
        Bo: 523, Wo: 0.2, 
        Lo: Ao_fromPrice*tokenRatio, 
        fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio},
    {res: [ (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600 * tokenRatio, 
            (1 - (600/(600 + (Math.pow(1/(priceRatio), 0.2/(0.2+0.5)) - 1) * 600 * tokenRatio))**(0.5/0.2)) * 523], 
        Bi: 600, Wi: 0.5, 
        Li: Ai_fromPrice * tokenRatio, 
        Bo: 523, Wo: 0.2, 
        Lo: Ao_fromPrice*tokenRatio*tokenRatio, 
        fee: 0,
        Lp: (523/0.2)/(600/0.5) * priceRatio},
 
 
]






//module.exports.errors = { ERR_LIMIT_FAILED: 0x30 };


module.exports.amountUpToPricePoints = [
    {res: 1.06008957447, Bi: 10, Wi: 0.3, Bo: 5260, Wo: 0.3, SER1: 430, fee: 0},
    {res: 0.12011996945, Bi: 10, Wi: 0.2, Bo: 4405, Wo: 0.1, SER1: 850, fee: 0},
    {res: 0,             Bi: 10, Wi: 0.5, Bo: 8810, Wo: 0.5, SER1: 881, fee: 0},
    {res: 0.97653399825, Bi: 10, Wi: 0.2, Bo: 4600, Wo: 0.4, SER1: 200, fee: 0},
    {res: 1.08172405558, Bi: 10, Wi: 0.3, Bo: 5260, Wo: 0.3, SER1: 430, fee: 0.02},
    {res: 0.12133330247, Bi: 10, Wi: 0.2, Bo: 4405, Wo: 0.1, SER1: 850, fee: 0.01},
    {res: 0,             Bi: 10, Wi: 0.5, Bo: 8810, Wo: 0.5, SER1: 881, fee: 0.03},
    {res: 1.08503777583, Bi: 10, Wi: 0.2, Bo: 4600, Wo: 0.4, SER1: 200, fee: 0.1},
];

module.exports.powPoints = [
    {res: 1.1 ** 1.5,    base: 1.1, exp: 1.5},
    {res: 0 ** 0,        base: 1.0,   exp: 0},
    {res: 1.05 ** 0,     base: 1.05, exp: 0},
    {res: 1.01 ** 0.2,   base: 1.01, exp: 0.2},
    {res: 0.9 ** 1.5,    base: 0.9, exp: 1.5},
    {res: 0.95 ** 0,     base: 0.95, exp: 0},
    {res: 0.91 ** 0.2,   base: 0.91, exp: 0.2},
    {res: 0.9 ** 0.2,    base: 0.9, exp: 0.2},
    {res: 1.5 ** 1.5,    base: 1.5, exp: 1.5},
];

module.exports.valuePoints = [
    {res: 0, tokens: []},
    {res: Math.pow(300, 0.399)*Math.pow(875, 0.2)*Math.pow(372, 0.001)*Math.pow(282, 0.3)*Math.pow(2, 0.1), 
        tokens: [[300, 0.399],
                 [875, 0.2],
                 [372, 0.001],
                 [282, 0.3],
                 [2,   0.1]]},
];

module.exports.refSpotPricePoints = [
    {res: (526/0.32)/(Math.pow(526, 0.32)*Math.pow(300, 0.399)*Math.pow(874, 0.2)*Math.pow(375, 0.001)*Math.pow(282, 0.3)*Math.pow(2, 0.1)), 
        tokens: [[526, 0.32],
                 [300, 0.399],
                 [874, 0.2],
                 [375, 0.001],
                 [282, 0.3],
                 [2,   0.1]],}
];

module.exports.normalizedWeightPoints = [
    {res: 0, tokens: []},
    {res: 0,
        tokens: [[0, 0],
                 [526, 0.32],
                 [300, 0.399],
                 [874, 0.2],
                 [375, 0.001],
                 [282, 0.3],
                 [2,   0.1]],},
    {res: 0.32/(0.32+0.399+0.2+0.001+0.3+0.1),
        tokens: [[526, 0.32],
                 [300, 0.399],
                 [874, 0.2],
                 [375, 0.001],
                 [282, 0.3],
                 [2,   0.1]],},
];
