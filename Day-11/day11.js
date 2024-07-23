// Day 11 : Promises and Async/Await

// Activity 1 : Understanding Promises
// Task 1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World")
    }, 2000)
})

promise1.then(message => console.log(message))

// Task 2 : Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error 1")
    }, 2000)
})

promise2.catch(message => console.log(message))


// Activity 2 : Chaining Promises
// Task 3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data 1")
    }, 2000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data 2")
    }, 1000)
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data 3")
    }, 3000)
})

promise3.then(message => console.log(message))
promise4.then(message => console.log(message))
promise5.then(message => console.log(message))


// Activity 3 : Using Async/Await
// Task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value.
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data")
    }, 2000)
})

async function getData() {
    const data = await promise6
    console.log(data)
}

// Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message.
const promise7 = new Promise((resolve, reject) => {
    reject("Error 2")
})

async function handleError() {
    try {
        const data = await promise7
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
handleError()

// Activity 4 : Fetching Data from an API
// Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises.

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
fetchData()

// Task 7 : Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/5')
    const data = await response.json()
    console.log(data)
}
fetchData1()


// Activity 5 : Concurrent Promises
// Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all the values.
Promise.all([promise3, promise4, promise5]).then(data => console.log(data))


// Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise3, promise4, promise5])
    .then(data => console.log("Promise race", data))