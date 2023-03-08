/* 1. Change the value of one of them (isHoliday or isVacation) so that canStayHome stores the true value. */

let isAtHome = false;
let isOnHoliday = true;

const john = isOnHoliday || isOnVacation; // don't change this line
{ 
console.log(`${john} + isOnHoliday`);

console.log(true);
}
/*2.  Change the value of one of them (isWaterHot or haveTea) so that canMakeTea stores the false value. */

let isWaterHot = true;
let haveTea = true;

const canMakeTea = isWaterHot && haveTea; { // don't change this line
console.log(canMakeTea);
console.log (true);
}

/* 3. Change the values of the constants so that canMakeCake is true, and we can start making the cake. */

var hasEggs = true;
var hasFlour = false;
var hasSugar = false;

const canMakeCake = hasEggs && hasFlour && hasSugar;
const canNotMakecake = hasEggs; {
console.log(canNotMakeCake);
console.log (true);
}
