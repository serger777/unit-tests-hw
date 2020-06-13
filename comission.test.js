const { commission } = require('./comission.js');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const dateFly = (day)=>{
    return Date.now() + day * MILLISECONDS_IN_DAY
};
const second = 1000;


describe(" после вылета и в день  вылета",()=>{

    test('после вылета', ()=>{
        expect(commission(dateFly(0)-second)).toBe(100);
    });
    test('0 + 1', ()=>{
        expect(commission(dateFly(0)+second)).toBe(75);
    });
    test('0 дней', ()=>{
        expect(commission(dateFly(0))).toBe(75);
    });
    test('день - секунда', ()=>{
        expect(commission(dateFly(1)-second)).toBe(75);
    });
});
describe(" за 24 часа",()=>{
   test('за день', ()=>{
       expect(commission(dateFly(1))).toBe(50);
   });
    test('день +', ()=>{
        expect(commission(dateFly(1))).toBe(50);
    });
    test('5 дней - 1', ()=>{
        expect(commission(dateFly(5)-second)).toBe(50);
    });
});
describe("за 5 дней ",()=>{
    test('за 5 дней', ()=>{
        expect(commission(dateFly(5))).toBe(20);
    });
    test('5 дней + 1', ()=>{
        expect(commission(dateFly(5)+second)).toBe(20);
    });
    test('10 дней -1', ()=>{
        expect(commission(dateFly(10)-second)).toBe(20);
    });
});
describe("10 дней до вылета ",()=>{
    test('за 10 дней', ()=>{
        expect(commission(dateFly(10))).toBe(0);
    });
    test('10 дней + 1', ()=>{
        expect(commission(dateFly(10)+second)).toBe(0);
    });
});

describe("не число",()=>{
    test('не число', ()=>{
        expect(commission(dateFly("sdsd"))).toBeFalsy();
    });
});
