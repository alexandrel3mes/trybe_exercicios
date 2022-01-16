// sum.js
const isItNan = (number1, number2) => {
  if (typeof number1 !== `number`|| typeof number2 !== `number`) {
    throw new Error ("parameters must be numbers");
  }
};
const sum = (a, b) => {
  try {
    isItNan(a,b);
    console.log(a + b)
    return a + b;
  } catch (error) {
    throw error.message;
  }
} 

module.exports = sum;