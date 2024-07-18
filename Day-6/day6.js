// Day 6 : Arrays

// Activity 1 : Array Creation and Access
// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console.
const nums = [1, 2, 3, 4, 5];
console.log(nums);

// Task 2 : Access the first and last elements of the array and log them to the console.
console.log(nums[0]);
console.log(nums[nums.length - 1]);


// Activity 2 : Array Methods (Basic)
// Task 3 : Use the push method to add a new number to the end of the array and log the updated array.
nums.push(6);
console.log(nums);

// Task 4 : Use the pop method to remove the last element fro the array and log the updated array.
nums.pop();
console.log(nums);

// Task 5 : Use the shift method to remove the first element from the array and log the updated array.
nums.shift();
console.log(nums);

// Task 6 : Use the unshift method to add a new number to the beginning of the array and log the updated array.
nums.unshift(0);
console.log(nums);


// Activity 3 : Array Methods (Intermediate)
// Task 7 : Use the map method to create a new array where each number is doubled and log the new array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = arr.map((num) => num * 2)
console.log(doubled)

// Task 8 : Use the filter method to create a new array with only even numbers and log the new array.
const filteredArray = arr.filter(num => num % 2 == 0)
console.log(filteredArray)

// Task 9 : Use the reduce method to calculate the sum of al numbers in the array and log the result.
const sum = arr.reduce((a, b) => a + b)
console.log(sum)


// Activity 4 : Array Iteration 
// Task 10 : Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Task 11 : Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(num => console.log(num))


// Activity 5 : Multi-dimensional Arrays
// Task 12 : Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix);

// Task 13 : Access and log a specific element from the two-dimensional array.
console.log(matrix[0][2]);