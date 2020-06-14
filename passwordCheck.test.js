const {passwordCheck} = require('./passwordCheck');

test("paswword check", ()=>{
    expect(passwordCheck("Nagibator777")).toBeFalsy;
})
test("paswword check fale", ()=>{
    expect(passwordCheck("This is the 7th password I have come up with!")).toBeTruthy;
})
