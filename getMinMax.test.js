const { getMinMax } = require("./getMinMax")

//классы эквивалентности
// 1) в инпут получена строка с числами через запятую
// 2) в инпуте строка не только с числами через зяпятую и пробелы
// 3) кроме чисел есть слова
// 4) только одно число
// 5) запятая и чсило
// 6) нет чисел
//7) нет запятой или пробела

describe('тестируем положительные сценарии когда в ипуте', ()=>{
    test(' числа через запятую', ()=>{
        expect(getMinMax('1,2,3,4')).toEqual({min:1, max: 4})
    });
    test('числами через запятуюи пробелы', ()=>{
        expect(getMinMax('1 2,3 4')).toEqual({min:1, max: 4})
    })
    test(' числами через запятую и пробелы b ckjdf', ()=>{
        expect(getMinMax('1,2,3,4 sdfsf sdf2300 34 34 sdf 324 sdf')).toEqual({min:1, max: 324})
    })
    test('только одно число', ()=>{
        expect(getMinMax('1,')).toEqual({min:1, max: 1})
    })
    test('нечисло', ()=>{
        expect(getMinMax('wqew,')).toEqual({min:Infinity, max: -Infinity})
    });
    test('отрицательные числа', ()=>{
        expect(getMinMax('-1, -2')).toEqual({min:-2, max: -1})
    });
    test('Infinity', ()=>{
        expect(getMinMax('Infinity, -Infinity')).toEqual({min:-Infinity, max: Infinity})
    });
    test('0', ()=>{
        expect(getMinMax('0, 0')).toEqual({min: 0, max: 0})
    });
})

describe('негативный сценарий',()=>{
    test('текст без запятой и пробела', ()=>{
        expect(getMinMax('фывыфв  ывыа ыва')).not.toBe({})
    })

})

