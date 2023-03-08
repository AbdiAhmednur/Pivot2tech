/* 1. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function evenOrOdd(number){ 
  if (number %2 === 0) { 
   return "even";
  } else {
    return "odd"
  }
}
console.log(evenOrOdd(2));

evenOrOdd()

/* 2. Create a function that takes an integer as an argument and multiplying a given number by 8 if it is an even number and by 9 otherwise. 
Try to use ternary operator */

function simpleMultiplication(number) {
  let result = number * 8;
  if(number %2 === 1){
    result = result * 9;
  }
  return result
}
console.log(result)
simpleMultiplication(number)

/* 3.Create a function that accepts the name of a programmer, and returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0. */

function howManyLightsabersDoYouOwn(name) {
if (name === "zach"){
  console.log(`${name} has 18 light sabers`)
  return 18;
}else{
  console.log(`${name} has 0 light sabers`)
  return 0;
}
}
howManyLightsabersDoYouOwn(name)


/* 4. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

const quarterOf = (month) => {
  switch (true) {
    case month >= 1 && month <= 3:
      console.log(1)
    case month >= 4 && month <= 6:
      console.log(2)
    case month >= 7 && month <= 9:
      console.log(3)
    case month >= 10 && month <= 12:
      console.log(4)
    default:
      console.log ("Invalid month");
  }
};


/* 5. Create a function that accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	                      100
n >= 5 and n < 10	          95
n >= 10	                    90
You can use if..else or ternary operator to complete it. */

function saleHotdogs(n) {
  let pricePerUnit;

  if (n < 5) {
    pricePerUnit = 100;
  } else if (n >= 5 && n < 10) {
    pricePerUnit = 95;
  } else {
    pricePerUnit = 90;
  }

  console.log(`Customer has purchased hotdogs at a price of $${pricePerUnit} per unit.`);
}

/* 6. Create a function that can transform a string into a number. 
if typeof argument isn't string return "The value should be a string"

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */

const stringToNumber = function (str) {
  if (typeof str !== "string") {
  return "the value should be string";
}
return number(str);
}
