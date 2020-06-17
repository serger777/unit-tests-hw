const {getIntersection} = require('./getIntersection');


describe('getIntersection',()=>{
   test("тестирование массива 2",()=>{
      expect(getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4])).toEqual([1, 3]);

   });
   test("тестирование массива 2,  a < b",()=>{
      expect(getIntersection([1, 1, 2, 4, 0], [0, 2, 1, 1, 4])).toEqual([0, 1, 1, 2, 4]);
   });
})

