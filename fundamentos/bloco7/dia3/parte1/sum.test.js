// sum.test.js
const sum = require('./sum');

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