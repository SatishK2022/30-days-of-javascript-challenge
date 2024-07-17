// Day 5 : Functions

// Activity 1 : Function Declaration
// Task 1 : Write a function to check if a number is even or odd and log the result to the console.
function isOddEven(num) {
    if (num % 2 == 0) {
        return `${num} is Even`
    } else {
        return `${num} is Odd`
    }
}

console.log(isOddEven(7)); // 7 is Odd

// Task 2 : Write a function to calculate the square of a number and return the result.
function squareOf(num) {
    return num * num;
}

console.log(squareOf(25)) // 625


// Activity 2 : Function Expression
// Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console.
const maximumOf = function (num1, num2) {
    if (num1 > num2) {
        return `${num1} is Maximum.`
    } else if (num2 > num1) {
        return `${num2} is Maximum.`
    } else {
        return `Numbers are Same.`
    }
}

console.log(maximumOf(10, 20)) // 20 is Maximum.
console.log(maximumOf(50, 50)) // Numbers are Same.

// Task 4 : Write a function expression to concatenate two strings and return the result.
const concatenate = function (str1, str2) {
    return `${str1} ${str2}`
}

console.log(concatenate("Hello, My Name is", "Satish")) // Hello, My Name is Satish


// Activity 3 : Arrow Functions
// Task 5 : Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (num1, num2) => {
    return num1 + num2;
}

console.log("The sum is", sum(4, 5)) // The sum is 9

// Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value.
const isCharPresent = (str, char) => {
    if (str.toLowerCase().includes(char)) {
        return true;
    } else {
        return false;
    }
}

console.log(isCharPresent("Hello", "h")) // true


// Activity 4 : Function Parameters and Default Values
// Task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function productOf(num1, num2 = 5) {
    return `The product is ${num1 * num2}`
}

console.log(productOf(4, 8)) // The product is 32
console.log(productOf(4)) // The product is 20

// Task 8 : Write a function that takes a person's name and age and return a greeting message. Provide a default value for the age.
function greeting(name, age = 20) {
    return `Hello ${name}, you are ${age} years old.`
}

console.log(greeting("Satish")) // Hello Satish, you are 20 years old.
console.log(greeting("Satish", 21)) // Hello Satish, you are 21 years old.


// Activity 5 : Higher-Order Functions
// Task 9 : Write a higher-order function that takes a funciton and a number, and calls the function that many times.
function repeat(fn, num) {
    for (let i = 0; i < num; i++) {
        fn();
    }
}

repeat(() => console.log("Hello!"), 5)

// Task 10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function compose(fn1, fn2, val) {
    return fn2(fn1(val));
}

console.log(compose(Math.abs, Math.sqrt, -25))