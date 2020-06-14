const {meanMode} = require('./meanMode');

test('массив чисел true', ()=>{
    expect(meanMode([4, 4, 4, 6, 2])).toBeTruthy();
})
test('массив чисел  false', ()=>{
    expect(meanMode([1, 1, 1, 2, 5])).toBeFalsy();
})
test('массив чисел  false', ()=>{
    expect(meanMode([])).toBeFalsy();
})
test('массив чисел  false', ()=>{
    expect(meanMode([1, 2, 3])).toBeFalsy();
})
