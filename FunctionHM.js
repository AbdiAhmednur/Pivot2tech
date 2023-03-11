var name = "123";


function validation(param){

   var answer = stringValidation(param);
   var result = stringLength(param)

   if(answer === true && result === true){
     console.log(`name ${param} is a string is greater then 2 and less then 10 so it passes validation`)
   }else{
    console.log(`${param} does not meet the requirement `)
   }
   }
   function stringValidation(name){
    const re = /^[a-zA-z]+$/;
    const num = /^[0-9] +$/;
    return re.test(name)
}

function stringLength(name){
    console.log(name.length)
    if(name.length >= 2 && name.length <= 10){ 
        var result = true
    }
    return result 
}

validation(name)



// tools like regx exisit and it is pattern to check for things 

/*function stringValidation(name){
    console.log(name)
    if (typeof name === "string"){
        var result = true
    } else {
        var result = false
        return result
    }*/