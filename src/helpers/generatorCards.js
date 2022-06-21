
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomSetIntWithoutRep = (min, cant, idNew, cont) => {

    // console.log(min,cant);
    // console.log('cont llegada:',cont);

    let setNumbers = [];
    let ObjectCard = [];
    
    do {
        const numRand = getRandomInt(min, cant + 1);
        if (!setNumbers.includes(numRand)) {
            // console.log('cont:',cont);
            setNumbers = [...setNumbers,
                numRand
            ]
            ObjectCard = [...ObjectCard,
            {
                id: idNew[cont],
                numRand,
                active: false,
                
            }
            ]
            cont++;
        }

    } while (setNumbers.length < cant - min + 1);

    return ObjectCard;
}

export const getDividers = (num) => {


    let dividers = [];

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {

            dividers = [...dividers, [i, num / i]]
            // console.log('dividers',dividers);
        };
    }
    
    let min = Math.abs(dividers[0][0] - dividers[0][1]);
    let cont = 0;
    let result = [];

    do {
        let couple = dividers[cont]
        // console.log('couple:',Math.abs(couple[0]-couple[1]));
        if (min >= Math.abs(couple[0] - couple[1])) {
            min = Math.abs(couple[0] - couple[1]);
            result = couple;
        }
        cont++;
    } while (cont < dividers.length);

    return result;
}

export const calcDisplayCards = (cant) => {

    // console.log('cant cartas',cant);

    let display = [];
    let mixNumberNew = [];


    // if(cant%2!==0){cant++}

    let total = cant / 2;
    // let total = cant;

    const result = getDividers(total);
    // console.log('result',result);
    let intervMax = Math.max.apply(null, result);
    let intervMin = Math.min.apply(null, result);
    // console.log('minmax',intervMin,intervMax);
    let interval = intervMax;
    let min = 1;

    let index = []

    for (let i = min; i <= cant; i++) {
        index = [...index,i]
    }

    let cont =0;

    for (let i = 0; i < 2; i++) {



        do {
            // console.log('interval before',interval);

            display = display.concat(getRandomSetIntWithoutRep(min, interval, index, cont));
            // console.log('cont salida:',cont);
            min = interval + 1;
            interval = interval + intervMax
            // console.log('interval after',intervMin);
            // console.log('display:',display.length);
            cont = cont + intervMax;

        } while (interval <= total);


        min = 1;
        interval = intervMax;

    }

    do {

        const posRand = Math.floor(Math.random() * (display.length-1));
        const objRand = display[posRand];
        mixNumberNew = [...mixNumberNew,objRand]
        display = display.filter(element=>element!==objRand)
        
        
    } while (display.length>0);              

    return mixNumberNew ;
}


// console.log(calcDisplayCards(17));
