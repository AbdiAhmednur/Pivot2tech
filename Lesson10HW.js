function helloWorld(){
    console.log("hello " + " world");
}
helloWorld();

function getRandomNumber() {
    var number = [1, 2, 3, 4, 5, 6];
    var randomIndex = Math.floor(Math.random());
    return number[randomIndex];
}
console.log(getRandomNumber());

function combineArray(){
    arrayList = ["cheese ", "milk ", "water ", "rice "]
    arrayList2 =["chocolate ", "flour ", "sugar ", "organic milk"]
    var combinedArray = arrayList.concat(arrayList2);
    console.log(arrayList.concat(arrayList2)); 
}
combineArray()

var  number = 13

function primeNumber(){
if (typeof number === 13){
    console.log("this is a prime number");
}else if (typeof number === 16){
    console.log("this is a prime number")
}else {
    console.log("this is not a prime number");
}    
}
primeNumber()


var number = 8;

function oddOREven(number) {
if(number % 2 === 0) {  
return "even"; 
} else { 
return "odd";
}
}

console.log (`the answer is ${oddOREven(number)}`);

oddOREven(number); 


var day = "Monday";

switch (day){
    case "monday":
        console.log("Lesson catch up and work")
        break;
    case "tuesday":
        console.log("gym, work, and lesson ")
        break;
}



















