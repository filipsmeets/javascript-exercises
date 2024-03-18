const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
  if (array === TypeError) {
    return 0;
  } else {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue,0,);
  }
};

const multiply = function(array) {
  if (array === TypeError) {
    return 0;
  } else {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue,);
  }
};

const power = function(num1,num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num1) {
	if (num1 === 0) {
    return 1;
  } else {
    let fact = num1;
    for (let index = (num1 - 1); index > 1; index--) {
      fact = fact * index;
    }
    return fact;
  }
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
