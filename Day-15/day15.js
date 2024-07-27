// Day 15 : Closures

// Activity 1 : Understanding Closures
// Task 1 : Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer() {
    let name = "Satish";
    return function inner() {
        console.log(name)
    }
}

const fun = outer()()

// Task 2 : Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
    let counter = 0;
    return function () {
        counter++
        return counter
    }
}

const getCounter = counter()
console.log(getCounter())
console.log(getCounter())
console.log(getCounter())


// Activity 2 : Practical Closures
// Task 3 : Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generageId() {
    let lastId = 0
    return function () {
        lastId++
        return lastId
    }
}

const getId = generageId()
console.log(getId())
console.log(getId())
console.log(getId())

// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name.
function greet(name) {
    return function () {
        console.log(`Hello ${name}`)
    }
}

const sayHello = greet("Satish")()


// Activity 3 : Closures in Loops
// Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const functionsArray = [];

for (let i = 0; i < 5; i++) {
    functionsArray.push((function (index) {
        return function () {
            console.log(index);
        };
    })(i));
}

functionsArray.forEach(func => func());


// Activity 4 : Module Pattern
// Task 6 : Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (
    function () {
        let items = [];

        return {
            add: function (item) {
                items.push(item);
                console.log(`Item added to collection: ${item}`);
            },
            remove: function (item) {
                const index = items.indexOf(item);

                if (index > -1) {
                    items.splice(index, 1);
                    console.log(`Item removed from collection: ${item}`);
                } else {
                    console.log(`Item not found in collection: ${item}`);
                }
            },
            list: function () {
                if (items.length === 0) {
                    console.log("No items in collection");
                } else {
                    console.log("Items in collection:");
                    items.forEach((item, index) => console.log(`${index + 1}. ${item}`));
                }
            }
        }
    }
)();

itemManager.add("Item 1");
itemManager.add("Item 2");
itemManager.list();
itemManager.remove("Item 2");
itemManager.list();


// Activity 5 : Memoization
// Task 7 : Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    let cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

// Task 8 : Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5))
console.log(memoizedFactorial(5))