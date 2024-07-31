// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [5, 2, 8, 12, 1, 4];
console.log(bubbleSort(arr));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr));

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort(arr));


// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 12));

// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countOccurrences(str) {
    let counts = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

console.log(countOccurrences("hello"));

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            seen = {};
            i = seen[char];
        } else {
            seen[char] = i;
            longest = Math.max(longest, Object.keys(seen).length);
        }
    }
    return longest;
}

console.log(findLongestSubstring("abcabcbb"));


// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    let temp = [];
    for (let i = 0; i < k; i++) {
        temp.push(arr[i]);
    }
    for (let i = k; i < arr.length; i++) {
        arr[i - k] = arr[i];
    }
    for (let i = 0; i < k; i++) {
        arr[arr.length - k + i] = temp[i];
    }
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));


// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(fibonacci(5));

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = new Array(n + 1).fill().map(() => new Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weights[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
            }
        }
    }
    return dp[n][capacity];
}

console.log(knapsack([1, 2, 3, 4, 5], [5, 4, 3, 2, 1], 5));