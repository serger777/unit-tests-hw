const { sum } = require("./sum")

test(' тест суммы', ()=>{
    expect(sum(1)(2)()).toBe(3)
})
test(' тест суммы 0', ()=>{
    expect(sum()).toBe(0)
})
