const head = document.head
const body = document.body
const list = document.querySelector(`ul`)
const button = document.getElementById(`add-car`)


button.addEventListener("click", function (e) {
    var result = prompt("What car would you like to add to the list?");
    if (result) {
      return false;
    }
    const child = document.createElement("li");
    child.innerText = result;
    for (let i = 0; i < list.children.length; i++) {
      if (list.children[i].innerText.toLowerCase() === result.toLowerCase()) {
        matchFound = true;
        alert(`${result} is already in the list`);
        return false;
        
      }
    }

    list.append(child);
  });
  

  const button2 = document.getElementById(`remove-car`)

  button2.addEventListener(`click`, function(e){
     var result = prompt("which car would you like to remove?")
     console.log(result)

     for (let i=0; i<list.children.length; i++){

        if (list.children[i].innerText.toLowerCase() === result.toLowerCase()){
            list.children[i].remove()
        }
     }

  })























