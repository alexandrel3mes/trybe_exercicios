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

//myRemove();

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

module.exports = { sum, myRemove };