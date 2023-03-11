
const head = document.head
const body = document.body
const button = document.getElementById(`button-2`);
const button1 = document.getElementById(`button-1`)
const input = document.querySelector(`input`);
const headingButton = document.getElementById(`new-heading`)







button1.addEventListener(`click`, function(e) {
    const h1 = document.querySelector(`h1`)
    h1.style.color = "green";
})




button.addEventListener(`click`, function(e){
 button.innerText = "button has been clicked";

})



input.addEventListener(`keyup`, function(e){
    if(input.value.length === 10){
        console.log("max length has been reached");
     alert(`Hello ${input.value}`);    
    }else{
        console.log(input.value);
    }
    
})


headingButton.addEventListener(`click`, function(e){
    const h2 = document.createElement(`h2`)
    h2.innerText = `new heading created`
    h2.style.backgroundColor = "blue";
    h2.style.color = "white";
    body.append(h2)
})



//Event Listener are basically a listening tool within JavaScript mainly used for buttons 
//if you want the content to change in the button you would use Event Listener
//there are many EventListeners click, mouseover, mousedown, mouseup, mouse in and mouseout
//look for a list that has mouseOver 
// keyup would work when values have been completed 
// Event Listen are important and mostly used on social media platform 
// Event Listen are mostly used buttons reaction.
// you always want to declare your variables at the top of your javaScript page
// do not forget function (e)

