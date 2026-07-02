const add = function(num1, num2) {
	return num1 + num2;
};


const subtract = function(num1, num2) {
	return num1 - num2;
};


const sum = function(arr) {
  // let sum = 0;
  // arr.forEach(num => {
  //   sum += num;
  // })
  // return sum;
  return arr.reduce((sum, num) => sum + num, 0);
};


const multiply = function(arr) {
  // let product = 1;
  // arr.forEach(num => {
  //   product *= num;
  // })
  // return product;
  return arr.reduce((product, num) => product *= num, 1);
};


const power = function(num, exponent) {
	return num**exponent;
};


const factorial = function(num) {
  let factorial_ = 1;
	for (let i = 1; i <= num; i++) {
    factorial_ *= i;
  }
  return factorial_;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
