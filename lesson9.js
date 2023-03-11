var hero = "spiderman";

if (hero.toLowerCase () === 'spiderman'){
console.log ("welcome hero");
} else if (hero === 'daredevil') {
console.log ("welcome hero");
} else { console.log ("you are not a superhero");
}


var age = [11, 12, 13, 14, 15, 16]

if ("age >= 11" && "16 <= age") {
console.log("welcome to secondary school")}
else { console.log ("you are not welcome here")}


var phone = "blackberry" 

if (phone === "iphone") {
    console.log ("welcome to the club");
} else if (phone === "samsung") { 
    console.log ("you are not welcome here");
}  else {
    console.log ("phone is not supported");
}


 
var shoppingList = ["sugar","tuna", "sandwich", "cheese", "bacon"]
if (shoppingList.every(item => ["sugar", "tuna", "sandwich", "cheese", "bacon"].includes(item))) {
 console.log("you have completed your shopping else") 
} else {
console.log ("you have not completed your shopping list");
}
    
const name = "ABDIRAHMAN"  

if (name.toLowerCase() === "abdirahman") {
    console.log ("welcome abdirahman");
} else {
    console.log ("I do not know you");
}
  


var myDayOfTheWeek = "monday"

switch (myDayOfTheWeek.toLowerCase()){
case "monday":
console.log("work and lesson plan")
break;
case "tuesday": 
console.log ("work and lesson")
break;
case "wednesday":
console.log ("work and lesson plan presentation")
break;
case "thursday":
console.log ("work")
break;
case "friday": 
console.log("work")
break;
case "saturday":
console.log("lesson & family")
break;
case "sunday":
console.log ("chill")
break;
default:
console.log ("that day does not exist")
break;
}
