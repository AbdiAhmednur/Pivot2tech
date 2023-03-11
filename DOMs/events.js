const head = document.head
const body = document.body
const button = document.getElementById(`btn-1`)
const button2 = document.getElementById(`btn-2`)
const input = document.querySelector(`input`)
const button3 = document.getElementById(`btn-3`)
const h1 = document.createElement("h1")

button.addEventListener( `click`, function(e){
    button.innerText = "this is working";
    document.body.style.backgroundColor = "pink";
})

button2.addEventListener(`click`, function(e){
    const h1 = document.querySelector(`h1`)
    h1.innerText = "event listeners homework 2";
    h1.style.color = "white";
    body.classList.toggle("colorChange")
})

input.addEventListener(`keyup`, function (e){
 if(input.value.length === 15){
    console.log(`max length reached`)
    alert(`hello ${input.value}`)
 }else{
    console.log(`input.value`)
 }
})

button3.addEventListener(`click`, function(e){
    form.classList.toggle(`display`)
})

h1.innerText = "Hello Abdirahman"
document.body.append(h1);





/////-------------------------------



const form = document.querySelector(`form`)

function submissionForm(e) {
  e.preventDefault();

  const input1 = document.getElementById(`first`)
  const input2 = document.getElementById(`last`)
  const ageInput = document.getElementById(`age`)

  var first = input1.value.trim()
  var last = input2.value.trim()

  var age = age(ageInput.value)
  console.log(age)

  if (first.length >= 2 && first.length <= 8 && last.length >= 2 && first.length <= 8 && age === true) {
    alert("form has been submitted")
    console.log(`${first} ${last}`)
  } else {
    alert("first name & last name cannot be empty")
    console.log(`${first.trim()} ${last.trim()} & cannot be a string`)
  }
}

function age(param){
    
    const re = /^[0-9]+$/;
    var ageInputted = re.test(param)

   return ageInputted
}


form.addEventListener(`submit`, submissionForm)

















// toggle will allow you to change things back to how original state 
// toggle basically allows you to switch something on and off
// toggle will work with any element
// toggle are use by some of the big social media platforms like google and meta for example 
// if you get stuck just youtube how to use the toggle element 
// remove item from a list
// .toggle is how it referenced in css 
// add .hover to your css 
// you would 
// forms must have event listeners 
// you do not always have to use function (e)
// new method trim() which removes empty white spaces
// `keyup` is mostly used on forms
// you always have to use prevent default() you write it lie e.preventDefault()
//there is also trimStart() or trimEnd()
// look into regax code
// look into function manipulation 
// look into e.preventDefault 
// e.preventDefault is mostly used for forms 
// look into creating form with function(e)
// there is also regax for words too in javaScript lookinto it 
// there os also a regex for email too LOOK into it 
// regular expression are also important in javascript 
//look into class list javascript form 
// prompt allows users to enter details  
// prompt helps website 





const list = document.querySelector(`ul`)
const addCarButton = document.getElementById(`add-car`)


addCarButton.addEventListener(`click`, function(e){

  var result = prompt("what is your name?")
  console.log(result)
  alert(`hello and welcome to my website ${result}`)
  const child = document.createElement(`li`)
  child.innerText = result

  list.append(Child)

})


//always spend time correcting mistakes 

// you can check if an item is on the list by doing a loop 

console.log(list.children[1].innerText);

for (let i = 0; i < list.children.length; i++){
    console.log(list.children[i].innerText);

    if (list.children[1].innerText.toLowerCase() === result.toLowerCase()){
        alert (`${result}is already on the list`)
        return false;
    }
}

list.append(child);

const removeCarButton = document.getElementById(`remove-car`)
removeCarButton.addEventListener(`click`, function(e){
    var result = prompt("what car would you like to remove?")
     console.log(result)

    if(!result){
        return false;
    }


     for (let i=0; i<list.children.length; i++){
        console.log(list.children[i].innerText)
    
        if (list.children[1].innerText.toLowerCase() === result.toLowerCase()){
            alert (`${result}is already on the list`)
            list.children[i].remove()
        }
    }
});

//when you want remove an object from a list you would use .remove()
// the summery video will show you how to remove items and add items 
// need help with help home work wat summery video 