// Day 10 : Event Handling

// Activity 1 : Basic Event Handling
// Task 1 : Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.getElementById('btn')
const para = document.getElementById('para')

btn.addEventListener('click', () => {
    para.textContent = "Button Clicked"
})

// Task 2 : Add a double-click event listener to an image that toggles its visibility.
const img = document.getElementById('img');
img.addEventListener('dblclick', () => {
    img.style.display = 'none'
})


// Activity 2 : Mouse Events
// Task 3 : Add a mouseover event listener to an element that changes its backgound color.
const ele = document.querySelector('.change-bg')
ele.addEventListener('mouseover', () => {
    ele.style.backgroundColor = "skyblue"
})

// Task 4 : Add a mouseout event listener to an element that resets its background color.
ele.addEventListener('mouseout', () => {
    ele.style.backgroundColor = ""
})

// Activity 3 : Keyboard Events
// Task 5 : Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById('input')
input.addEventListener('keydown', (e) => {
    console.log(e.key)
})

// Task 6 : Add a keyup event listener to an input field that displays the current value in a paragraph.
const input1 = document.getElementById('input1')
const text = document.querySelector('.text')
input1.addEventListener('keyup', () => {
    text.textContent = input1.value
})


// Activity 4 : Form Events
// Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log(email, password)
})

// Task 8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectedEle = document.querySelector('.selected-ele')
const select = document.getElementById('select')

select.addEventListener('change', () => {
    selectedEle.textContent = select.value
})


// Activity 5 : Event Delegation
// Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent)
    }
})

// Task 10 : Add a event listener to a parent element that listens for events from dynamically added child elements.
const parent = document.querySelector('.parent')

parent.addEventListener('click', (e) => {
    console.log(e)

    if (e.target.parentNode === parent) {
        console.log(e.target.textContent)
    }
})

const chiledEle1 = document.createElement('div')
chiledEle1.textContent = "New Div"
parent.appendChild(chiledEle1)

const chiledEle2 = document.createElement('div')
chiledEle2.textContent = "New Div"
parent.appendChild(chiledEle2)
