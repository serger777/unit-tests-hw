const { rle } = require("./rle")


test(' rle', ()=>{
    expect(rle('AAAB')).toBe("A3B")
})
// test(' rle', ()=>{
//     expect(rle('BCCDDDEEEE')).toBe(0)
// })
