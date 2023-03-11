//document.head

const body = document.body

const subHeading = document.createElement(`h2`)
 subHeading.innerText = "31st jan 2023"
 //subHeading.innerText = "31st jan 2023"

const orderList = document.createElement(`ol`)
orderList.innerHTML = "this is the title for the ordered list"

const listItem1 = document.createElement(`li`)
listItem1.innerText = "item number 1"


const listItem2 = document.createElement(`li`)
listItem2.innerText = "item number 2"

orderList.append(listItem1)
orderList.append(listItem2)

console.log(`list has ${orderList.childElementCount} number of items`)

const hyperlink = document.createElement(`a`) 
hyperlink.innerText = "page 1"


// Selecting elements by their id 

const firstHeading = document.getElementById(`title`)
firstHeading.innerText = "lesson one is all about dom manipulation"


//select elements by their class


const secondHeading = document.getElementsByClassName(`dom`)
secondHeading.innerText = "lesson one is all about dom manipulation AS WELL"


//select elements by their elements 

/*const anyHeading = document.querySelector(`h3`)
anyHeading.innerText = "abdi"*/

//select elements by their title this time 

/*const anyHeading = document.querySelector(`title`)
anyHeading.innerText = "dom manipulation"*/

//this is how you can create a title tag

// first create a head variable 

const head = document.head

// then create your title element 

const title = document.createElement(`title`)
title.innerText = "Dom lesson 1"


function generator(){
    var colors = ["pink", "brown", "blue", "orange"]
    var position = Math.floor(math.random()*colors.length)
    return colors[position]
}

//below is how you can create interactions with your button 
// creating button interaction 


const button = document.getElementById(`btn`);

button.addEventListener(`click`, function(e){
    
    answer = generator()
    
    console.log(answer)

    console.log(colors[position])



    button.innerText = "welcome";
    document.body.style.backgroundColor = colors[position]
});




head.append(title)
body.append(button)
body.append(subHeading)
body.append(orderList)
body.append(hyperlink)







//document refers to content in the html file
// if something is yellow you have to follow it up with a method  
// innerText is basically is basically saying change that inner text 
//doms is link the virtual version of our HTML 
// .append() is basically another version of .push() but also pushes content onto html 
// .createElement is very important and common. it can change any tag you have below is an example of how to make it a p tag 
// const subHeading = document.createElement(`p`)
// doms is very similar to functions as you have to repeat yourself at the bottom 
// to count how many children you have on your html page use console.log(orderList.childElementCount);
// learn more about dom manipulation 
// look into async
// to change an element in in your html all you have to do is use the code below in your javascript  

/*const firstHeading = document.getElementById(`title`)
firstHeading.innerText = "lesson one is all about dom manipulation"*/
// the getElementById will allow you to push new content in content 
// querySelector() are basically used to make query selectors 
//look into different types of eventlistener 