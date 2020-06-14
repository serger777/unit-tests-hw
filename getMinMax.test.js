const { getMinMax } = require("./getMinMax")

test('тест', ()=>{
    expect(getMinMax('1,2,3,4')).toEqual({min:1, max: 4})
})
