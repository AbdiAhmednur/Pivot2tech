const head = document.head
const body = document.body

const heading = document.createElement("h1");
heading.innerText = "Homework Dom Manipulation";

const myName = document.createElement("h1");
myName.innerText = "My Name Abdirahman";

const h3 = document.querySelector(`h4`);
h3.innerText = "todays date";

const todayDateMain = document.createElement("p");
todayDateMain.innerHTML = `<strong>${06}/${02}/${2023}</strong>`;

const orderListMain = document.createElement("h3");
orderListMain.innerText = "coding languages I am learning";

const orderList = document.createElement("ol");

const orderList1 = document.createElement("li");
orderList1.innerHTML = "HTML";

const orderList2 = document.createElement("li");
orderList2.innerHTML = "CSS";

const orderList3 = document.createElement("li");
orderList3.innerHTML = "JavaScript";

const page = document.createElement(`p`);
page.innerText = "page 1";

document.body.append(heading);
document.body.append(myName);
document.body.append(h3);
document.body.append(todayDateMain);
document.body.append(orderListMain);
document.body.append(orderList);
orderList.append(orderList1);
orderList.append(orderList2);
orderList.append(orderList3);
document.body.append(page);


// theres also a method you can use called date this is how you can use it Date()
// this is how you can create it 



/*const date = document.createElement(`h2`);
var today = new Date();
const dd = today.getDate();
const mm = today.getMonth();
const yy = today.getFullYear();

date.innerText = `${dd}/${mm}/${yy}`;
console.log(`${dd}/${mm}/${yy}`);


document.body.append(date); */



//------- todays listen is on EventListener--------


// you always have to create const.body at the at the start

//in the function (e) basically means leave it if not pressed 
//querySelector is 

//there are also other EventListener

// look the keyup method 

// input.eventListener function(e){
// querySelector are use to l
//querySelector

