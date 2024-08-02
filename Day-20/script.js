// Day 20 : LocalStorage and SessionStorage

// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("lang", "JavaScript");

const para = document.querySelector(".lang");
const lang = localStorage.getItem("lang");
para.textContent = lang

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const obj = {
    name: "Satish",
    age: 20,
    isAdmin: true,
}

localStorage.setItem("obj", JSON.stringify(obj));
const obj2 = JSON.parse(localStorage.getItem("obj"));
console.log(obj2)


// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
const localFormData = document.getElementById("formData");

localFormData.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    name.value = "";
    email.value = "";

    displayData();
})


function displayData() {
    const para = document.querySelector(".localData");
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");

    if (name && email) {
        para.textContent = `Name: ${name}, Email: ${email}`;
    } else {
        para.textContent = "No data found";
    }
}


// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log("Before Removal: ", localStorage.getItem("lang"));
localStorage.removeItem("lang");
console.log("After Removal: ", localStorage.getItem("lang"));


// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("age", "20");
console.log(sessionStorage.getItem("age"));

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const books = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: 1997
}

sessionStorage.setItem("books", JSON.stringify(books));
const books2 = JSON.parse(sessionStorage.getItem("books"));
console.log(books2);


// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load. 
const formData = document.getElementById("formData");

formData.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("userEmail", email);

    name.value = "";
    email.value = "";

    displaySessionData();
})

function displaySessionData() {
    const para = document.querySelector(".sessionData");
    const name = sessionStorage.getItem("userName");
    const email = sessionStorage.getItem("userEmail");

    if (name && email) {
        para.textContent = `Name: ${name}, Email: ${email}`;
    } else {
        para.textContent = "No data found";
    }
}

window.onload = function() {
    displaySessionData();
    displayData();
}

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log("Before Removal: ", sessionStorage.getItem("books"));
sessionStorage.removeItem("books");
console.log("After Removal: ", sessionStorage.getItem("books"));


// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function storeData(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

function retrieveData(key) {
    const value = localStorage.getItem(key);
    const sessionValue = sessionStorage.getItem(key);
    console.log(`Value from localStorage: ${value}`);
    console.log(`Value from sessionStorage: ${sessionValue}`);
}

storeData("country", "India");
retrieveData("country");

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearData() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("Data cleared from localStorage and sessionStorage");

    if (localStorage.length === 0 && sessionStorage.length === 0) {
        console.log("Both storages are empty");
    } else {
        console.log("Storages are not empty");
    }
}

clearData();