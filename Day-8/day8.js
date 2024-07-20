// Day - 8 : ES6+ Features

// Activity 1 : Template Literals
// Task 1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Satish";
let age = 20;
let str = `My name is ${name} and I am ${age} years old.`;
console.log(str)

// Task 2 : Create a multi-line string using template literals and log it to the console.
let str1 = `My name is Satish and I am 20 years old.
I love JavaScript.`;
console.log(str1);


// Activity 2 : Destructuring
// Task 3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr = [1, 2, 3, 4]
const [one, two] = arr
console.log(`First Element ${one} and Second Element ${two}`)

// task 4 : Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: 1997
}

const {title, author} = book
console.log(`The book ${title} is written by ${author}.`)


// Activity 3 : Spread and Rest Operators
// Task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let nums = [1, 2, 3, 4, 5]
let nums2 = [...nums, 6, 7, 8, 9, 10]
console.log(nums2)

// Task 6 : Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.
function sum(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5))


// Activity 4 : Default Parameters
// Task 7 : Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(num1, num2 = 1) {
    return num1 * num2
}

console.log(product(4, 5))
console.log(product(10))


// Activity 5 : Enhanced Object Literals
// Task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let obj = {
    name: "Satish",
    age: 20,
    getSummary: function () {
        return `My name is ${this.name} and I am ${this.age} years old.`
    }
}
console.log(obj.getSummary())

// Task 9 : Create an object with computed property names based on variables and log the object to the console.
const variable1 = "prop1";
const variable2 = "prop2";

const object = {
  [variable1]: "value1",
  [variable2]: "value2"
};

console.log(object);