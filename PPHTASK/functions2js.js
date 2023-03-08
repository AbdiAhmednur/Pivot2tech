 
 const a = 34 
 const b = 2 

 function addition(number1,number2) { 
 console.log (number1+ number2);
 }
 function subtract(number1,number2){
    console.log (number1 - number2);
 }

 function multiplication (number1, number2){
    console.log (number1*number2);
 }

 function division (number1, number2){
    console.log(number1/2);
 }

 if (typeof a === "number" && typeof b === "number"){
    addition (a,b)
    subtract (a,b)
    multiplication (a,b)
    division (a,b)
 }else{
    console.log ("variable a and variable b have to be a number");
 }



// how can we obtain info amongst function 

var name = "abdi"
console.log (name)

function dummy(){
    const name = "adam"
    console.log(name);
    return name;
}

var name2 = dummy()

function numbers (number5, number6){ 
var result = (number5*number6)/2
const name = "abdirahman"
//console.log (result);
return number5+number6;
}

var answer = numbers(15,30)

console.log(answer);

if (typeof answer === "number"){
    console.log (answer);
}else{
    console.log (`the variable inside the answer is a sting: ${answer}`)
}


//return in function over powers most things with in the function 
//find out the meaning of typeof
//
//---------------------------------------------------------------------------------------------


function list(){
    var array = ["cheese", "butter", "milk"];
    return array
}

function item(param){
    if (typeof param === "string"){
        param = 0
    }
    var list = ["oranges", "apples", "pears",]
    return list[param]

}

var storeItem = item(2) 
console.log (storeItem);

var array = list()
array.push(storeItem) 
console.log(array);

array.push(list())

/////////////////////////////////////////////////////////////////////////

var name;

function validation(name1){
   var result = stringValidation 
}

function stringValidation (name1){
    if(typeof  === "string"){
        return true
    }
}

























//var item = list();
//console.log(item)




















