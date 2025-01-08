// Logical Operators : AND (&&) | OR (||) | NOT(!)


// AND -> all conditions must be true
// OR -> atleast one of the condition should be true
// NOT -> true -->false  ,  false --> true

// let isMale = gender == "MALE"   ( == returns boolean value and assigns the value to variable isMale)

const MALE = 'M';
const FEMALE = 'F';

const age = 29;
const gender = 'M';

if (age > 20 && gender == MALE) {
    console.log("Adult Male");
} else if (age >= 13 && gender == MALE)
{
    console.log("Teenage Male");
}


let white_sauce = false;
let red_sauce = true;


if (white_sauce || red_sauce)
{
    console.log("I will eat momo.");
}
else {
    console.log("I won't eat momo");
}


const number = 45;
if (number % 2 != 0)
{
    console.log(number + " is odd");
} else {
    console.log(number + " is even")
}