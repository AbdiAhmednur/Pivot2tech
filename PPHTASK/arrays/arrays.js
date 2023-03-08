/* An array is an ordered collection of values. Each value is called an element, and each element has a numeric position in the array, known as its index */

// Creation an array
const numbers = [1, 2, 3, 4, 5];
const numbers2 = new Array(
  6,
  7,
  8,
  9,
  10
); /* --> function-constructor new Array (capitalize) */
const a = new Array(5); // No elements, but a.length is 5.

const numbers3 = Array.of(1, 2, 3);

const strings = ["name", "surname", "Hello"];
const mixed = [
  true,
  false,
  undefined,
  null,
  "string",
  10,
  ["I'm a nested array"],
  { a: 1 },
];

let i = 2;
numbers[i] = 8; //change array on the index 2
// console.log(numbers);
numbers[i + 2] = 200; //change array on the index 4
// console.log(numbers);

//length of the array
// console.log(numbers.length);

/* Adding and Deleting Array Elements */
const store = []; //empty array

// Add a value at the end.
store.push("first");
console.log(store); //[ 'first' ]
store.push("second");
console.log(store); // [ 'first', 'second' ]

// Add a value at the start.
store.unshift("third");
console.log(store); // [ 'third', 'first', 'second' ]

// Remove the last element of the array
store.pop();
console.log(store); //[ 'third', 'first' ]

// Remove the first element of the array
store.shift();
console.log(store); // [ 'first' ]

// delete operator
const animals = ["bear", "mouse", "cat"];
delete animals[1];
console.log(animals); // [ 'bear', <1 empty item>, 'cat' ]

// concat
const animals2 = ["lion", "tiger"];
const concatedArray = animals.concat(animals2);
console.log(concatedArray);

//slice
const slicedArray = concatedArray.slice(2, 3);
console.log(slicedArray);
console.log(concatedArray);

//splice
const emptyAndCat = concatedArray.splice(1, 2, 4);
console.log(emptyAndCat);
console.log(
  concatedArray
); /* delete emptyitem and cat from array and put instead 4*/

const lion = concatedArray.splice(2, 1);
console.log(concatedArray); // delete lion
