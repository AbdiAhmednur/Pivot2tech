function hello(){
    console.log("Hello world")
}

hello();
// question 2
function randomNumberGenerator(param){
    var answer = math.floor(Math.random() * 3)
    console.log(answer);
    return answer;
}

var numberGenerated = randomNumberGenerator(100);
console.log(numberGenerated);

//learn the different methods like math.random or .slice 
//mdn methods has lots resources for different javascript methods 
// you can also use math.ceil as a method 

// question 3

function combined (array1, array2){
    var answer = array1.concat(array2)
    console.log (answer);
}

combined ([1, 2, 3],[4, 5, 6])

// you have to use .concat method from array 

function oddOREven(number){
    var answer = number%2 
    console.log(answer)

    if (number%2 === 0){
        console.log (`${number} is a even number`)
    }else{
        console.log (`${number} is a odd number`)
    }
}

oddOREven(13);

//the percentage % sign is a modulist symbol in javascript 


switch (key) {
    case value:
        
        break;

    default:
        break;
}


// There are two ways of doing this the first way is 

//question 4

// first way 

function reverse(array){
    var answer = array.reverse();
    console.log(answer);
    reverse([5,4,3,2,6])
}

// second way 

function reverse(param){
    console.log(param)
    var str = param.toString()
    console.log(str)

var answer = str.split(``)
console.log(answer)
//[5,4,3,2,6]

reversed = answer.reverse()

console.log(reversed)

joined = reversed.join(``)

console.log(joined)
return joined
}

reverse (5,4,3,2,6)

// question 5

// look into palindrome

palinAnswer = ("madam"); {
    console.log(palinAnswer)
}

checkPalindrome("madam", palinAnswer)

function checkPalindrome(word, reverseAnswer){
    if(word === reverseAnswer){
        console.log(`${word}is a palindrome`) } 
        else {
            console.log(`${word} is not a palindrome`) }
        }

    






