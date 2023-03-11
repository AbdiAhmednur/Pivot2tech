// objects are very similar to array, they are like profiles 
// objects allow you to create personal profiles
// functions and objects are very similar

/*const person = {
    firstName: "abdi",
    lastName: "Ahmednur",
    age: 27
}*/

// above is an example 

const person = {
    firstName: "abdi",
    lastName: "Ahmednur",
    age: 27,
    fullName: function()
    {
    return this.firstName + " " + this.lastName;
}
}
console.log(person.fullName())
console.log(person)

//delete person.age  
//
person.race = "black"

const car = {
    name: "abdi",
    make: "bmw",
    model: "3 series",
    year: 2022,
    owner: function(){
        return this.name 

    } 
}
console.log(car.owner())

delete car.make
person.race = "black"
car.color = "green"
// above is basically how you completely write an object 
// if you want to delete person details delete this.make or delete person.age  
// to add something all you need to do is person.race = "black" or car.color = "blue "
// objects is used mostly for blogging websites like medium 


 var blog = [ "how to make baaris iyo chicken", "my fav cars"]

 // this is the  proper way of writing an object 

 function person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

 }

 console.log(person)

 const abdi = new person ("Abdirahman", "Ahmednur", 27)

 console.log (abdi)


// example of it would be a singing up page this is how it would look
// id is basically perosonal identification 
// look into javascript regex 


const mongoose = require (`mongoose`);

const userSchema = mongoose.userSchema{
    _id: mongoose.Schema.Types.ObjectedId,
    email:{
        types: string,
        required: true,
        unique: true, 
        match: 1576996323453 regex 
    },
    password: {
        types: string,
        required: true
        
    }

}

module.exports = mongoose.model(`user`, userSchema);




