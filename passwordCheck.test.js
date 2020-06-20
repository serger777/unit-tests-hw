const {passwordCheck} = require('./passwordCheck');
// классы
// 1) - Если в пароле не хватает числа
// 2) - Есть нехватает симовла алфавита
//2.2) Есть нехватает симовла алфавита в верхнем регистре или в нижнем регистре
// 3) - если нет символа ! ? . , + - * / =
// 4) - Содержит не менее 10 символов
//5) -пустая строка
//6) введен сложный пароль из букв цифр символов и его длинна более 10

describe('Кейсы когда пароль не проходит проверку',()=>{
    test("Не хватает числа", ()=>{
        expect(passwordCheck("SergeyGerasimov!")).toBeFalsy;
    });
    test("Не хватает симфолов алфавита", ()=>{
        expect(passwordCheck("7777777777777!")).toBeFalsy;
    });
    test("Не хватает симфолов алфавита в верхнем регистре", ()=>{
        expect(passwordCheck("7777777777777ф!")).toBeFalsy;
    });
    test("Не хватает симфолов алфавита в нижнем регистре", ()=>{
        expect(passwordCheck("7777777777777Ф!")).toBeFalsy;
    });
    test("не хватает специального символа", ()=>{
        expect(passwordCheck("SergeyGerasimov7")).toBeFalsy;
    });
    test("длинна менее 10 символов", ()=>{
        expect(passwordCheck("SergeyGer!7")).toBeFalsy;
    });
    test("пустая строка", ()=>{
        expect(passwordCheck("")).toBeFalsy;
    })

});

describe('Кейсы когда пароль проходит проверку',()=>{
    test("paswword check fale", ()=>{
        expect(passwordCheck("This is the 7th password I have come up with!")).toBeTruthy;
    })
});
