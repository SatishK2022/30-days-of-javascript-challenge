// Day 7 : Objects

// Activity 1 : Object Creation and Access
// Task 1 : Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: 1997
}
console.log(book);

// Task 2 : Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);


// Activity 2 : Object Methods
// Task 3 : Add a method to the book object called getSummary that returns a string with the book's title and author, and log the result of calling this method.
book.getSummary = function () {
    return `${this.title} was written by ${this.author}`
}

console.log(book.getSummary());

// Task 4 : Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (year) {
    this.year = year
}
book.updateYear(2000);
console.log(book);


// Activity 3 : Nested Objects
// Task 5 : Create a nested object representing a library with properties like namd and books (an array of book objects), and log the library object to the console.
const library = {
    name: "My Library",
    books: [
        {
            title: "Harry Potter",
            author: "J. K. Rowling",
            year: 1997
        },
        {
            title: "Lord of the Rings",
            author: "J. R. R. Tolkien",
            year: 1954
        },
        {
            title: "The Hobbit",
            author: "J. R. R. Tolkien",
            year: 1937
        },
        {
            title: "The Fellowship of the Ring",
            author: "J. R. R. Tolkien",
            year: 1954
        },
        {
            title: "The Two Towers",
            author: "J. R. R. Tolkien",
            year: 1954
        }
    ]
}
console.log(library)

// Task 6 : Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach(book => console.log(book.title))


// Activity 4 : The this keyword
// Task 7 : Add a method to the book object that uset the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getBookSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}
console.log(book.getBookSummary())


// Activity 5 : Object Iteration
// Task 8 : Use a for...in loop to iterate over the properties of book object and log each property and its value.
for (let prop in book) {
    console.log(`${prop} : ${book[prop]}`);
}

// Task 9 : Use Object.keys and Object.values method to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));