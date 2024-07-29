// Day 16 : Recursion

// Activity 1 : Basic Recursion
// Task 1 : Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
} 

console.log(fact(5));
console.log(fact(20));

// Task 2 : Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
console.log(fib(5));


// Activity 2 : Recursion with Arrays
// Task 3 : Write a recursive function to find the sum of all elements in a array. Log the result for a few test cases.
function findSsum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + findSsum(arr.slice(1));
}

console.log(findSsum([1, 2, 3, 4, 5]));

// Task 4 : Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maximum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const maxOfRest = maximum(arr.slice(1));

    return Math.max(arr[0], maxOfRest)
}

console.log(maximum([10, 1, 2, 3, 40]))


// Activity 3 : String Manipulation with Recursion
// Task 5 : Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str.length === 0) {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));

// Task 6 : Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }
    return false;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


// Activity 4 : Recursive Search
// Task 7 : Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }
    const mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr.slice(0, mid), target);
    }
    return binarySearch(arr.slice(mid + 1), target);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

// Task 8 : Write a recursive function to count the occurances of a target element in a array. Log the result for a few test cases.
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr[0] === target) {
        return 1 + countOccurrences(arr.slice(1), target);
    }
    return countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 4, 5, 2], 2));
console.log(countOccurrences([1, 2, 3, 4, 5, 2], 6));


// Activity 5 : Tree Traversal
// Task 9 : Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
function inOrderTraversal(node) {
    if (node.left) {
        inOrderTraversal(node.left);
    }
    console.log(node.value);
    if (node.right) {
        inOrderTraversal(node.right);
    }
}

inOrderTraversal({ value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } })


// Task 10 : Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function depth(node) {
    if (!node) {
        return 0;
    }
    return 1 + Math.max(depth(node.left), depth(node.right));
}

console.log(depth({ value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }))