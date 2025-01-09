const students = ["Piyush", "John", "Jane", "Bill"]

function print(any) {
    console.log(any)
}

let new_students = students.forEach(val => val + ' Garg')
console.log("New_students: " + new_students)

new_students = students.map(val => val + ' Garg');
console.log("New_students: " + new_students)


let numbers = [1, 21, 32, 4, 5, 6];
const double = val => val * 2;

let new_arr = numbers.forEach(double);
console.log(new_arr);
new_arr = numbers.map(double);
console.log(new_arr)


let ans = numbers.find(num => num === 32)
let ansIndex = numbers.findIndex(num => num===32)
console.log(ans)
console.log(ansIndex)
console.log(numbers.indexOf(32))
console.log(numbers.includes(32))

const isEven = val => !(val & 1);
console.log(numbers)
let evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)


let sliced_arr = numbers.slice(1, 4);
console.log("Original array after slicing: " + numbers)
console.log("Sliced array: " + sliced_arr)


let spliced_arr = numbers.splice(2, 3);
console.log(spliced_arr)  // splice 4 elements from starting from index 1 
console.log(numbers) // remaining elements will be present in order after splicing in numbers array