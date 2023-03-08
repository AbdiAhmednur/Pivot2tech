//const numbers = [1, 2, 3, 4, 5, 6, 7];
//const strings = ["one ", "two ", 3, 4, 5];

numbers.pop();
numbers.push(0);
numbers.length


string.pop([1]);
string.push(6)
string.slice(0, 1)

/* 1. delete from array numbers last element  */

const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.pop();
{ console.log (numbers); }

/* 2. add at the start of the array number 0 */

numbers.unshift(0); {
    console.log (numbers);
}

/* 3. find length of the array */

 { console.log(numbers.length);
}

/* 4. array should contain [3, 4, 5] */


const numbers = [1, 2, 3, 4, 5, 6, 7];
let newNumber = numbers.slice(2,5); {  
console.log(newNumber); }


/* 5. concat array from step 4 with array strings -> ["one", "two", 3, 4, 5] */

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.unshift("one ", "two " )
{ console.log (numbers);
}


/* 6. delete "two", 3 from array */

numbers.splice(1, 1);
{ console.log (numbers); }
/* 7. add 6 at the end of the array */

numbers.push(8, 9);

{ console.log (numbers) }


/* 8. add 2 at index 1 of the array */

numbers.splice(1, 0, 2); {

console.log(numbers);
}


// 9. add true at the last index of the array

numbers.push("true"); {
    console.log (numbers);
}

