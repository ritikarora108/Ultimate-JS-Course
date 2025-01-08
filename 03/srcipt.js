// Datatypes - Number | String | Booleans | Null | Undefined  | Object

// Number

let num1 = 3.14;
let num2 = 10;
console.log(num1 + num2);
console.log(num1 / num2);

// String
let firstName = 'Ritik';
const lastName = 'Arora';
console.log(firstName + ' ' + lastName);

// Booleans
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("User logged in successfully!");
} else {
    console.log("User is not logged in.")
}

let lastLoginDate = null;
console.log(lastLoginDate);
console.log(typeof lastLoginDate);


let developer_when = undefined;
console.log(developer_when)
console.log(typeof developer_when)

let semester = 'VIII';

// objects
const person = {
    name: 'ritik',
    age: '20',
    college: 'dtu',
    semester: semester,
}
console.log(person);

//  Internally, true->1 and false->0
console.log(true + 10);

// string + string -> concatenated string
// string + number -> string
// string * number -> number
// string * string -> number  // If the strings are in number form
console.log('12' * '12');
console.log('a' * 1) // ->NaN
console.log('a' + 1)

// typeof Operator
console.log(typeof ('12' * '12'))
console.log(1+'2')
console.log(typeof (1 + '2'));