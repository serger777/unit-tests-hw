const { commission } = require('./comission.js');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

const test = (name, day, result)=>{
    const dateFly = Date.now() + MILLISECONDS_IN_DAY* day ;
    if(commission(dateFly) === result){
        console.log( `${name} success`);
    }else{
        console.log( `${name} error`);
    }
};

test('после вылета', -1, 100);
test('до 24 часов', 0, 75);
test('дата 1 день -', 0.9, 75);



test('дата 1 день', 1, 50);
test('дата 4 дня', 4, 50);
test('дата 5 дней', 5, 20);
test('дата 6 дней', 6, 20);

test('дата 9 дней', 9, 20);
test('дата 10 дней', 10, 0);
test('дата 11 дней', 11, 0);

test('test', "test", 0);

