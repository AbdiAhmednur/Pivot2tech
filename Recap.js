// Mdn is the best website for concepts and javascript methods 
// incrementing means going up and decrementing which means going down 
// you have to have for and let at the start of the loop

for (let number=1; number<=100; number++){
    console.log(number)
}

//different example 

for (let i = 0; i < 10; i=i+1)(
    console.log(`the number inside the variable i is ${i}`)
)

// you can edit the loop how you want above 
// if you do not have your stopping position set your loop will continue to run
// below is how can create a infinity loop 


for (let i = 12; i >=10; i=i+10)(
    console.log(`the number inside the variable i is ${i}`)
)

// it is important to have a stopping position 
// control c is how you stop it 

// below is an example of how you can use array and loops together 

var array = ["oranges", "apples", "pineapple", "banana", "bat", "cheese", "grapes", "bat", "socks", "jeans", "t-shirt", 
"bottoms", "hat", "shoes", "coat", "gloves",]

for (let i = 0; i < array.length; i++){
    console.log(`the number inside the variable i is ${i}`)
    console.log(`which is the item ${array[i]} of the array`)
    console.log("------------------------------------------")
}

// this is how you use for loops, with conditional and array 

for (let i = 0; i < array.length; i++)
    if (array[i]==="bat"){
    console.log(`found the bat at position ${i}`)
}

// you always have to do your test in javascript 
// below is an example of how you can use both array and loops to look for certain items within a list
console.log(array[30])


// while loop example 

 let i=0

while (i<array.length){
    if (array[i]=== "bat"){
    console.log(`found the bat at position ${i}`)

    }
    i++
}

// the issue with while loops is the i is conditioned outside of the loop
// the difference between while and for loop is for loop is always private 
// for loop is more easy to understand
// for and while will always give you the same result even if they are looping through an array
// syntax are basically the javascript language like var or const for example 
// let is basically global

var a = "abdul"
let x = 1
const y = true; 
const array = [0, 123];
var nothing;


function dataTypes(param){
    console.log(typeof param);
}

dataType(a)
dataType(x)
dataType(y)
dataType(array)
dataType(nothing)

// above is how to use functions and data types together along with the correct syntax 

// below is an example of function 




function dataTypes(param){
console.log(typeof param)
}

var a = 123
dataTypes(a);

// above is an example of to write a function with datatypes

function list(){ 
    array = ["pens", "pencils", "books"]
    console.log(array)
}

list();

// above is an example of how to write a function 

//below is an example of conditionals and functions 

function phone(param){
    if(param.toLowerCase()=== "iPhone"){
        console.log(`this ${param} is made by apple `)
    }else if (param.toLowerCase()=== "pixel"){
        console.log(`this ${param} is made by  google`)
    }else{
        console.log(`this ${param} is made by samsung`)
    }
}

phone("samsung")
phone("pixel")

// below is an example of param with switch case 

var name = "abdi"; 


function grade(param,name){
    switch(param){
        case "A*":
            console.log(`${name} has achieved 90 or higher`)
            break;
            case "A":
            console.log(`${name} has achieved 80 - 90`)
            break;
            default:
            console.log(`${name} has achieved less than 80`)
            break;
    }
}


grade ("C","abdi")



// function with array, conditions, and looping.


var array = [1,2,3,4,5,6,7,8,9,10,11,22,44,55,66,666,777,777,8888,999,000,111,34,4,344,999,666,7777,]
var array2 = [1,2,3,4,5,6,7,8,9,10,11,22,44,55,66,666,777,777,8888,999,000,111,34,4,344,999,666,7777,]
var array3 = [1,2,3,4,5,6,7,8,9,10,11,22,44,55,66,666,777,777,8888,999,000,111,34,4,344,999,666,7777,]

function loop(param){

    let largest = 0;

    for (let i=0; i<param.length; i++){ 
    if (param[i] > largest){
        largest = param[i]

    }
}
     console.log(`the largest item in the list is ${largest}`)

}

loop(array)
loop(array2)
loop(array3)



// more function 

var alphabet = ['a','b','c','d','e','f','g', `ben`, `h`, `j`, `l`, `m`, `n`, `o`, "p", `q`, `r`, `s`, `t`, `u`, `w`, `x`, `y`, `z`]

function checkForItem (param, item){
    for (let i=0; i < param.length; i++){
       
       if (param[i] === item.toLowerCase()){ 
        console.log(`found the ${item} at position ${i}`)
       }
       }
    }



checkForItem (alphabet, `ben`)

console.log(alphabet(6))


// coding works in order 


// functions with a return 

function list(){ 
    array = ["pens ", "pencils ", "books "]
    return array;
}

var list = list();

console.log(`items in the list are variables ${list}`)


// more switch cases 


function grade(grade,name){
    switch(true){
        case grade>90:
            console.log(`${name} has achieved A*`)
            break;
            case grade > 88 && grade <=90:
            console.log(`${name} has achieved A`)
            break;
            default:
            console.log(`${name} has achieved B`)
            break;
    }
}


grade (85, "abdi")

//End of recap 














