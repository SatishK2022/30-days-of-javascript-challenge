// Day 9 : DOM Manipulation 

// Activity 1 : Selecting and Manipulating Elements
// Task 1 : Select an HTML element by its ID and chage its text content.
document.getElementById("para").innerText = "Satish Kumar"

// Task 2 : Select an HTML element by its class and change its background color.
document.querySelector('.home').style.backgroundColor = "orange"


// Activity 2 : Creating and Appending Elements
// Task 3 : Create a new div element with some text content and append it to the body.
const div = document.createElement('div');
div.textContent = "This is a div."
document.body.appendChild(div)

// Task 4 : Create a new li element and add it to an existing ul list.
const li = document.createElement('li');
li.textContent = "Contact"
const ul = document.querySelector('ul')
ul.appendChild(li)


// Activity 3 : Removing Elements
// Task 5 : Select an HTML element and remove it from the DOM.
const ele = document.querySelector('.remove')
ele.remove()

// Task 6 : Remove the last child of a specific HTML element.
const ele1 = document.querySelector('.task')
ele1.lastElementChild.remove()


// Activity 4 : Modifying Attributes and Classes
// Task 7 : Select an HTML element and change one of its attributes (e.g., src fo an img tag).
const img = document.querySelector('img')
img.src = "https://images.unsplash.com/photo-1717597860306-e6d3602f9913?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// Task 8 : Add and remove a CSS class to/from an HTML element.
const h3 = document.querySelector('h3')
h3.classList.remove('size')
h3.classList.add('center')


// Activity 5 : Event Handling
// Task 9 : Add a click event listener to a button the text content of a paragraph.
const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
btn.addEventListener('click' , () => {
    text.textContent = "Button Clicked"
})

// Task 10 : Add a mouseover event listner to an element that changes its border color.
const border = document.querySelector('.change-border')
border.addEventListener('mouseover', () => {
    border.style.borderColor = "blue"
    border.style.borderWidth = "5px"
})