// how can we obtain info inside function 

var name = "abdul";

console.log(name)

function dummy(){
    const name = "adam";
    return name;
}

var name2 = dummy()

console.log(name2)

//

function numbers(number1, number2) {
    var result = (number1*number2)/2
    console.log(result);
}

numbers(15, 30)

//
function numbers(number1, number2) {
    var result = (number1*number2)/2
    return result;
}

var result = numbers (15, 30)

console.log(result)
 if (answer === "")

// when return result you also have to declare it as a variable outside of function 


//////////

function numbers(number1, number2) {
    var result = (number1*number2)/2
    const teacher = "abdul"
    //console.log (result) 
    return number1+number2;
}

var answer = numbers (15, 30)

//console.log(teacher);

 if (typeof answer ==="number"){
    //console.log(answer)
} else {
 //console.log (`the variable answer is ${answer}`)
 }


//////////////////////////

function list(){
    var array = ["cheese", "butter", "milk"];
    return array;
}


function item(param){

    if (typeof param === ""){
        param === 0
    }

 var list = ["oranges", "pears", "apples", "grapes", ]
  return list[param]
}

var storeItem = item(2)

var array = list()


array.push(storeItem)

console.log(array)






///////////////////////////////////////////////////////////







var main = "Abdi";

function validation(param) {
     var four = stringValidation()
     var result = stringLength(param)

    if (four === true && result === true){
        console.log(`name ${param} is a string that is greater than 2 && less than 10 so it passes validation`)
    } else {
              console.log (`${param} does not meet the requirement`)
    }
}

function stringValidation (main){
    if (typeof main === "string"){
        var result = true
        return result
    } else {

    var result = false
}
return result;
}

function stringLength(main){
    console.log (main.length);
    if (main.length > 2 && main.length <= 10){
        var result = true 
    }
    return result
}

validation(main)




