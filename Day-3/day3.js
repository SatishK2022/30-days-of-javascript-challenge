// Day 3 : Control Structures

// Activity 1 : if-else Statements
// Task 1 : Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = -10;

if (num > 0) {
    console.log(`Number is Positive.`)
} else if (num < 0) {
    console.log(`Number is Negative.`)
} else {
    console.log(`Number is Zero.`)
}

// Task 2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.")
} else {
    console.log("You are not eligible to vote.")
}


// Activity 2 : Nested if-else Statement
// Task 3 : Write a program to find the largest of three numbers using nested if-else statements.
let a = 10;
let b = 50;
let c = 20;

if (a >= b) {
    if (a >= c) {
        console.log(`${a} is largest`)
    } else {
        console.log(`${c} is largest`)
    }
} else {
    if (b >= c) {
        console.log(`${b} is largest`)
    } else {
        console.log(`${c} is largest`)
    }
}


// Activity 3 : Switch Case
// Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
let day = 5;

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Please enter a valid number")
        break;
}

// Task 5 : Write a program that uses a swith case to assign a grade ('A', 'B', 'C', 'D', 'E') based on a score and log the grade to the console
let score = 50;

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("Grade A")
        break;
    case (score >= 80 && score < 90):
        console.log("Grade B")
        break;
    case (score >= 70 && score < 80):
        console.log("Grade C")
        break;
    case (score >= 60 && score < 70):
        console.log("Grade D")
        break;
    case (score >= 50 && score < 60):
        console.log("Grade E")
        break;
    default:
        console.log("Grade F")
}


// Activity 4 : Conditional (Ternary) Operator
// Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number = 40;
(number % 2) == 0 ? console.log("Even") : console.log("Odd")


// Activity 5 : Combining Conditions
// Task 7 : Write a program to check if a year is leap year using multiple conditions (divisible by 4, but not 100 unless also divided by 400) and log the result to the console.
let year = 2020;

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap Year")
} else {
    console.log("Not a Leap Year")
}