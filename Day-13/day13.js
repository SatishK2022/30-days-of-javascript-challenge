// Day 13 : Modules

// Activity 1 : Creating and Exporting Modules
// Task 1 : Create a module that exports a function to add two numbers. Import and use this module in another script.
import { add } from "./helper.js";
console.log("Sum is", add(2, 3))

// Task 2 : Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import { object } from "./helper.js";
console.log(object.getSummary())


// Activity 2 : Named and Default Exports
// Task 3 : Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { add3, multiply } from "./helper.js";
console.log("Sum is", add3(2, 3, 4));
console.log("Multiply is", multiply(2, 3));

// Task 4 : Create a module that exports a single function using default export. Import and use this function in another script.
import remainder from "./helper.js";
console.log("Remainder is", remainder(10, 3))


// Activity 3 : Importing Entire Modules
// Task 5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as helper from "./helper.js"

console.log("Divid is", helper.divide(10, 2))
console.log("The Value of Pi is", helper.PI)
console.log("The Max Value is", helper.MAX_VAL)


// Activity 4 : Using Third-Party Modules
// Task 6 : Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import array from "lodash/array.js"

const arr = [1, 2, 3, 4, 5]
const arr1 = array.concat(arr, 6, 7, 8)
console.table(arr1)

const arr2 = [1, 2, 3, [4], [5, 6], [7]]
const arr3 = array.flatten(arr2)
console.table(arr3)

// Task 7 : Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from "axios";
(async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/5")
    console.table(response.data)
})()


// Activity 5 : Module Bundling (Optional)
// Task 8 : Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.