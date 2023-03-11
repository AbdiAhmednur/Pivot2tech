var name = "abdirahman";

function validation(param){
   var answer = stringValidation(param) 
   if (answer = true){
     console.log(`name ${answer} is a string`)
   }
}

function stringValidation(name){
    if(typeof name === "string") {
        var result = true;
    } else {
        var result = false;
    }
    return result;
}

validation(name)