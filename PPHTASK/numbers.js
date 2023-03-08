// In Javascript, all numbers are of the number type. They can contain both integer and fractional values.

let addition = 10 + 5; // addition
console.log(addition); // 15

let subtraction = 10 - 5; // subtraction
console.log(subtraction); // 5

let multiplication = 10 * 5; // multiplication
console.log(multiplication); // 50

let division = 10 / 5; // division
console.log(division); // 2

let exponentiation = 10 ** 5; // exponentiation
console.log(exponentiation); // 100000

let remainder = 16 % 7; // remainder of the division
console.log(remainder); // 2 - subtract 7 until the result is less than 7

//Using the % operator, you can get the last digit of a number, for example:

let number = 345 % 10;
console.log(number); // 5

/* Usually, operations are performed from left to right. But multiplication and division have higher priority, so they are executed before addition and subtraction. For example: */
console.log(
  5 + 1 * 10 // 15, not 60
);

/* To specify the correct calculation order, you should use parentheses (). Then this operation will be performed first, and then all the others, and (5 + 1) * 10 will be 60. */
