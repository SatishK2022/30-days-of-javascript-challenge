// Day 14 : Classes

// Activity 1 : Class Definition
// Task 1 : Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}, How are you?`);
    }

    updateAge(age) {
        this.age = age;
        console.log(age)
    }

    static sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

const person1 = new Person("Satish", 20);
person1.greet()

// Task 2 : Add a method to the Person class that updates the age property and logs the updated age.
person1.updateAge(21)


// Activity 2 : Class Inheritance
// Task 3 : Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
    static count = 0
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.count++
    }

    greet() {
        console.log(`Hello ${this.name}, and Student Id is ${this.studentId}`)
    }

    getStudentId() {
        console.log(this.studentId)
    }
}

const student1 = new Student("Satish", "20", "abc01")
student1.getStudentId()

// Task 4 : Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
student1.greet()


// Activity 3 : Static Methods and Properties
// Task 5 : Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Person.sayHello("Satish")

// Task 6 : Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log("Total Students: ", Student.count)


// Activity 4 : Getters and Setters
// Task 7 : Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person2 = new Person1("Satish", "Kumar")
console.log(person2.fullName)

// Task 8 : Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
person2.fullName = "Rohit Kumar"
console.log(person2.fullName)


// Activity 5 : Private Fields
// Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance
    constructor(balance) {
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
    }

    withdraw(amount) {
        this.#balance -= amount
    }

    getBalance() {
        return this.#balance
    }
}


// Task 10 : Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each oepration.
const account = new Account(1000)
console.log(account.getBalance())
account.deposit(500)
console.log(account.getBalance())
account.withdraw(200)
console.log(account.getBalance())