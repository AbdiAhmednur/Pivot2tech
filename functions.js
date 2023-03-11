//var hero = "SPIDERMAN";
//console.log (hero);
//console.log (hero.toLocaleLowerCase());
//console.log (hero.toUpperCase());
//console.log (hero.length)

var age = 16
console.log (typeof age) 
if (typeof age === "number"){
if (age >= 11 || age >= 16){
  console.log ("you are in secondary school")
} else if (age >= 16 && age <18) { 
console.log ("you are in college") 
} else if (age >= 5 && age < 11) {
    console.log ("you are in secondary school")
} else if (age > 1 && age < 5) {
    ("you are in pre school")
} else if (age >= 80) {
    console.log (" you are too old my friend")
} else {
    console.log ("you are not welcome here")
} 
} else {
console.log ("age can not be anything except for a number")
}


var hero = "batman"
if (hero === "superman" || hero.toLowerCase() === "batman" || hero.toLocaleUpperCase()=== "woderwomen")
console.log(`${hero.toLowerCase()} is a dc character`) 
else if (hero=== "spiderman"){
console.log (`${hero.toLocaleUpperCase} you are a marvel superhero`)
} else {
console.log ("I do not know this hero")
}


var abdi = [ "fruit", "cheese", "butter", "milk", "salad"]

if (abdi.length === 5) {
console.log ("you have completed your shopping")
} else if (abdi.length >= 5) { 
console.log ("you have too much")
} else if ( abdi.length < 5) {
    console.log ("you have too little")
} else { console.log ("you have not completed your shopping")
}

var phone = "Iphone"
if (phone.toLowerCase()=== "iphone"){
    console.log (`this is an ${phone}`)
} else if (phone.toLowerCase () === "samsung") {
    console.log (`this is an ${phone}`)
} else { console.log ("I only know these phones") }



///////////////switch cases////////

var hero = "batman" 
switch (hero.toLowerCase()) {
case  "wonderwomen": 
 console.log ("this ${hero.tolowercase()} is a dc character")
 break;
 case "superman":
 console.log ("this ${hero.tolowercase()} is a dc character")
 break; 
 case "flash":
console.log ("this ${hero.tolowercase()} is a dc character")
break;
case "batman":
console.log ("this ${hero.tolowercase()} is a dc character")
break;
case "arrow":
console.log ("this ${hero.tolowercase()} is a dc character")
break;
case "robin":
console.log ("this ${hero.tolowercase()} is a dc character")
break;
case "spiderman": 
console.log ("this ${hero.tolowercase()} is a a marvel character")
break;
case "hulk":
console.log ("this ${hero.tolowercase()} is a a marvel character")
break;
case "captain america": 
console.log ("this ${hero.tolowercase()} is a a marvel character")
break;
case "thor":
console.log ("this ${hero.tolowercase()} is a a marvel character")
break;
default:
console.log ("I do not know who you are")
break;
}
////////////end of switch




if (hero === "superman" || hero.toLowerCase() === "batman" || hero.toLocaleUpperCase()=== "woderwomen")
console.log(`${hero.toLowerCase()} is a dc character`) 
else if (hero=== "spiderman"){
console.log (`${hero.toLocaleUpperCase} you are a marvel superhero`)
} else {
console.log ("I do not know this hero")
}
