const message = "Hello, world!"; /* --> string */
const hasCat = false; /* -->  boolean type -> true or false */
const price = 20; /* --> number */

// null - For empty or unknown values

//at first a box is empty
let box = null;

// then present is put in the box
box = "Birthday present";

// the box is empty again
box = null;

let value; /* --> undefined - for variables that are only declared and not defined or initialized*/

// The typeof operator can examine a value and tell you what type it is.

const name = "Misha";
console.log(typeof name); // 'string'

let age = 37;
console.log(typeof (age + 1)); // 'number'

const isMarried = true;
console.log(typeof isMarried); // 'boolean'

console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
