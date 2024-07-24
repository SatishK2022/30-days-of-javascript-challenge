// Day 12 : Error Handling

// Activity 1 : Error Handling with Try-Catch
// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 

function throwError() {
    throw new Error("This is an error")
}

try {
    throwError()
} catch (error) {
    console.log(error)
}

// Task 2 : Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero")
    }
    return a / b;
}

try {
    divide(20, 0);
} catch (error) {
    console.log(error)
}


// Activity 2 : Finally Block
// Task 3 : Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("Try block")
} catch (error) {
    console.log("Catch block")
} finally {
    console.log("Finally block")
}


// Activity 3 : Custom Error Objects
// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error")
}

try {
    throwCustomError()
} catch (error) {
    console.log(error)
}

// Task 5 : Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
    if (input === "") {
        throw new CustomError("Input cannot be empty")
    }
    return input
}

try {
    validateInput("")
} catch (error) {
    console.log(error)
}


// Activity 4 : Error Handling in Promises
// Task 6 : Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Promise resolved")
    } else {
        reject("Promise rejected")
    }
})

promise.catch(error => console.log(error))

// Task 7 : Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleError() {
    try {
        const data = await promise
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

handleError()


// Activity 5 : Graceful Error Handling in Fetch
// Task 8 : Use the fetch API to request data from an invalid URL and handle the error .catch(). Log an appropriate error message to the console.
fetch('https://google.com')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// Task 9 : Use the fetch API to request data from a invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch('https://google.com/hello')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()