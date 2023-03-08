/* Javascript uses the boolean type for such checks. It contains only two values: true or false.

Javascript uses the following operators to compare numbers: ===, !==, >, <, >= and <=
*/

// `===` checks if values are equal
console.log(
  2 === 2, // true
  2 === 3 // false
);

// `!==` works the opposite of equality
console.log(
  2 !== 2, // false
  2 !== 3 // true
);

// `>` checks if the value on the left is greater than the value on the right
console.log(
  3 > 2, // true
  1 > 2, // false
  2 > 2 // false
);

// `<` checks if the value on the left is less than the value on the right
console.log(
  2 < 3, // true
  2 < 1, // false
  2 < 2 // false
);

// `>=` checks if the value on the left is greater than or equal to the value on the right
console.log(
  1 >= 2, // false
  2 >= 2 // true
);

// `<=` checks if the value on the left is less than or equal to the value on the right
console.log(
  1 <= 2, // true
  2 <= 2 // true
);

/* Strings in Javascript are compared letter by letter in alphabetical order. Let's explain:

Compare the first letter of the first string with the first letter of the second string.
If the first letters are different, the larger string is the one where the first letter is later in the alphabet.
When the first letters are equal, the second letters are compared according to the same principle, and so on.
The comparison continues until the following letter of one of the strings is greater than the corresponding letter in the other string.
If one of the strings runs out of letters and the second does not, then the second one is greater.
If all letters match, then the strings are equal.
*/
console.log(
  "b" > "a", // true
  "abc" > "aba", // true
  "sunny" > "sun", // true
  "hello" === "hello" // true
);

/* in Javascript, lowercase letters come after uppercase letters, so comparing 'a' > 'Y' evaluates to true: */

console.log(
  "a" > "Y", // true
  "B" > "a", // false
  "A" < "a", // true
  "a" === "A", // false
  "Hello" === "hello" // false
);

/* To get a variable's or expression's opposite value, use the logical negation operator ! */

const isAdult = true;
console.log(isAdult); // true

const isNotAdult = !isAdult;
console.log(isNotAdult); // false

const isNotAdult2 = !(age >= 18);
console.log(isNotAdult2); // false

/* If you need to check that all conditions are met, you can use the && operator — logical AND.

It returns true only if all of its arguments are true. Otherwise — false.
 */

const hasEnoughMoney = true;
const canBuy = isAdult && hasEnoughMoney; // true

/* If you need to check that at least one of the conditions is truthy, you can use the || operator — logical OR.

It returns true if at least one of its arguments is true. Otherwise — false. */

const hasEnoughCash = true;
const hasCreditLimit = false;
const canBuy1 = hasEnoughCash || hasCreditLimit; // true
