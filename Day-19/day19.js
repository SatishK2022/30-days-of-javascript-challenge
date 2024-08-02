// Day 19 : Regular Expressions

// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const str1 = "JavaScript is a scripting language. I love JavaScript";
const regex1 = /JavaScript/g;
console.log(str1.match(regex1));

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const str2 = "I am 20 years old";
const regex2 = /\d/g;
console.log(str2.match(regex2));


// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const regex3 = /\b[A-Z]\w+/g;
console.log(str1.match(regex3));

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const regex4 = /\d+/g;
console.log(str2.match(regex4));


// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const phoneNo = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/g;
console.log(phoneNo.match(regex5));

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "example.user@example.com";

const pattern = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const match = email.match(pattern);

if (match) {
    const username = match[1];
    const domain = match[2];
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
} else {
    console.log("No match found.");
}


// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const regex6 = /^\b(\w+)\b/g;
console.log(str1.match(regex6));

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const regex7 = /\b(\w+)\b$/g;
console.log(str1.match(regex7));


// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "MyPassword123!";
const regex8 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log(regex8.test(password));

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const url = "https://www.example.com";
const regex9 = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
console.log(regex9.test(url));