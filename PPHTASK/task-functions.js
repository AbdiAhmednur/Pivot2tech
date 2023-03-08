/*1. Write a function which accepts 2 parameters (numbers) and returns their difference (use function declaration) */

function addTheNumber(number1, number2){
let result =  number1 + number2;
return result;
console.log (result);
}

addTheNumber(4, 6); 

/* 2. Write a function  which accepts 1 parameter and returns a string  with this parameter (use function expression)*/

/*function subtractNumbers(number1, number2) {
 let result = number1 - number2;
 return (result);
}

subtractNumbers(8,2)*/

console.log(subtractNumbers(8,2))


const subtractNumbers = function(a){
  let 
return a.toString()
   
}


/* 3. Write a function that accepts firstName, lastName and returns a string "Welcome firstName, LastName" (use arrow function) */



const printName = (firstName, lastName ) => {
console.log (`Welcome ${firstName} ${lastName}`);

}

printName ("abdi", "ahmednur");




/* 4. Write a function that accepts an array and returns array without first and last elements */

function removeFirstAndLast(recipeForLaunch) {
   if (recipeForLaunch.length <= 2) {
     return [];
   }
   return recipeForLaunch.slice(1, recipeForLaunch.length - 1);
 }
 
 var recipeForLaunch = ["uncle ben rice ", "2 eggs ", "coconut water ", "avocado "];
 console.log(removeFirstAndLast(recipeForLaunch));
 

 // below is an example of how to use array with a map 

 const fruits = ["apple", "orange", "pear", "banana"]; 

 const fruits2 = fruits.map((fruit, index) => {
 return index === 2 ? fruit.toUpperCase() : fruit.toLowerCase(); 

})

console.log (fruits2)


 //// array.map is very important and commonly used in projects 
const Fruits = ["apple", "orange", "pear", "banana"]

const {title, description} = Fruits; 
console.log (title, description); 
