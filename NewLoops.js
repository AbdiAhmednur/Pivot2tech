// in javascript there are 5 different loops aal of them do the same thing
// for loop
//do...while loop
// for in loop
// for of loop
// in lops you have to have a stop condition
// look for a loop diagram
// it is important to have stop condition in your loop
// the ititrator
// looping can also be used for count down   
array = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i< array.length; i++){
    console.log(array[i]);

}

for (let i = 10; i >=0; i--){
    console.log (i)
}

// if you want it to go down it by 5
for (let i = 10; i >=0; i-=5){

}

// or you can do it by the one that makes sence to you 

for (let i = 10; i >=0; i-= i-5 ){

}

// this is how you write your while loop 

let i=100
while (i <= 0){
    console.log(i)
    i=1-2
}

// now choose which one you like 
 array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
 
 for (let i=0; i<array.length; i++) 
 
 if(array[0] === 23){
    console.log ("found the target number it was in position " + 0)
 }

//this is how you can find a number using for loop 

array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

for (let i=0; i<array.length; i++) {
if (array[i]=== 23){
    console.log ("found the target number 23 and it was in position "+ array[i]);
    break;
}else{
    console.log("target number is not in the array")
    break;
}

}

// depending on the senario you can use certain loops for certain things

//look into nested for loops 


// you can also use array to look for target numbers 

array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

console.log(array.indexOf(5));

//for loops are use for indexing numbers through array 
// loops are also used for both count up and count down 
//website that has multiple background colors uses for loop










// write a function that checks if the number inputted is a prime number 

let number = 3

// 2 3 5 7 11 13 17 19 23 

if (number > 1){
    console.log(number)
        for (let i=2; i<=number; i++){
            console.log(i)
            if(number%i===0){
                console.log ("is a prime number ");

            }

        }       
}else {
    console.log ("is not prime number ");
}


//this is how for loops is written 

for (let i=0; i<array.length; i++){
    if(array[i] === 12){
        console.log("found 12 at position" + i) 
    }
}

// this is how while loops are written 

let i = 0;

while (i<array.length){
    if (array[i]=== 12){
        console.log("found 12 at position" + i)
    }

    i++;
}


//very simple for loop 


for (let i=0; i<=10; i++){
    console.log("hello world")
}
