// Day 4 : Loops

// Acticity 1 : For Loop
// Task 1 : Write a program to print numbers from 1 to 10 using for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Task 2 : Write a program to print the multiplication table of 5 using for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`)
}


// Activity 2 : While Loop
// Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using while loop.
let sum = 0;
let i = 0;

while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum of numbers from 1 to 10 is", sum)

// Task 4 : Write a program to print numbers from 10 to 1 using while loop.
let num = 10;

while(num > 0) {
    console.log(num)
    num--
}


// Activity 3 : Do While Loop
// Task 5 : Write a program to print numbers from 1 to 5 using a do while loop.
let number = 1;

do {
    console.log(number);
    number++
} while(number <= 5);

// Task 6 : Write a program to calculate the factorial of a number using a do while loop.
let x = 5;
let result = 1;

do {
    result *= x;
    x--;
} while(x > 0);

console.log("Factorial is", result);


// Activity 4 : Nested Loops
// Task 7 : Write a program to print a pattern using nested for loops: 
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}


// Activity 5 : Loop Control Statements
// Task 8 : Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i)
}

// Task 9 : Write a program to print numbers from 1 to 10, but stop the loop whenthe number is 7 using the break statement.
for(let i = 1; i <= 10; i++) {
    if(i == 7) {
        break;
    }
    console.log(i)
}