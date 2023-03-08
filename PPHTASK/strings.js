/* Strings represent text data. They can be written in 'single' or "double" quotes, or `backticks` */

// You can insert variable values, expressions, and line breaks using backticks. This insertion is called interpolation:

const a = 5;
const b = 3;
const name = "Natalia";

const message = `
  Hi, ${name}!
  Welcome to the team.
  a + b = ${a + b}
`;

console.log(message);

/* In Javascript, you can concatenate (combine) strings using the + operator. */

console.log(
  "My age is " + 12, // 'My age is 12'
  7 + " is my lucky number", // '7 is my lucky number',
  "12" + 34, // '1234' string
  12 + "34", // '1234' string
  12 + 34 // 46 number
);

//if at least one of the values combined by the operator + is a string, then the concatenation is performed (and we get a "glued" string);

let phrase = "";

phrase = phrase + "Hello"; // 'Hello'
phrase = phrase + ", "; // 'Hello, '
phrase = phrase + "World!"; // 'Hello, World!';
