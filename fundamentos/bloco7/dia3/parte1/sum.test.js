// sum.test.js
const {
  sum,
  myRemove
 } = require('./sum');

describe('Requisito 1 do exercício', () => {
  
  test('sums two values', () => {
    expect(sum(2, 3)).toBe(5);
  });
  
  test('sum of 4 and 5 is 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  
  test('sum of 0 and 0 is 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  
  test('log an error when try to sum 4 plus "5"', () => {
    expect(() => { sum(4,"5") }).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('Requisito 2 do exercício', () => {

  test('returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1,2,4])
  });

  test('does not return the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1,2,3,4])
  });

  test('returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1,2,3,4])
  });

});
