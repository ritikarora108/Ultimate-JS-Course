// Arrays

// Array elements can be mutated
const students = ['Piyush', 'John', 'Ritwick'];
// students = ["Ritik", "Arora"]  // const can't be re-initialized
console.log(students)


// Hetrogeneous
const arr = [1, "Ritik", true, null, undefined, 4.56, '😊']
arr.push({courseName: "Java", semester: "VII"})
console.log(arr)

console.log(arr.indexOf("Ritik")); // 0-based indexing
console.log(arr.indexOf("Arora"))

arr.pop();
console.log(arr)

const my_arr = [2, 1, 3, 13];
my_arr.reverse();
console.log(my_arr)