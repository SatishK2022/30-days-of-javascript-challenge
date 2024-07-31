// Day 17 : Data Structures

// Activity 1 : Linked List
// Task 1 : Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const firstNode = new Node(10);
const secondNode = new Node(20);
const thirdNode = new Node(30);

firstNode.next = secondNode;
secondNode.next = thirdNode;

let currentNode = firstNode;
while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}

// Task 2 : Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    removeNode() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.addNode(30);
linkedList.display();
linkedList.removeNode();
linkedList.display();


// Activity 2 : Stack
// Task 3 : Implement a stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

// Task 4 : Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversed = "";
    for (let i = 0; i < str.length; i++) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello"));


// Activity 3 : Queue
// Task 5 : Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift();
    }

    front() {
        return this.queue[0];
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front());
queue.dequeue();
console.log(queue.front());

// Task 6 : Use the Queue class to sumulate a simple printer queue where print jobs are added to the queue and processed in order.

function printQueue(arr) {
    const queue = new Queue();
    for (let i = 0; i < arr.length; i++) {
        queue.enqueue(arr[i]);
    }
    let sum = 0;
    while (queue.queue.length > 0) {
        sum += queue.dequeue();
    }
    return sum;
}

console.log(printQueue([10, 20, 30]));


// Activity 4 : Binary Tree
// Task 7 : Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new TreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new TreeNode(value);
        return this.right;
    }
}


// Task 8 : Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    inOrderTraversal() {
        function traverse(node) {
            if (node !== null) {
                traverse(node.left);
                console.log(node.value);
                traverse(node.right);
            }
        }
        traverse(this.root);
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.inOrderTraversal();


// Activity 5 : Graph
// Task 9 : Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search(BFS).
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(vertex) {
        const queue = [vertex];
        const visited = {};
        while (queue.length) {
            const current = queue.shift();
            if (!visited[current]) {
                visited[current] = true;
                console.log(current);
                queue.push(...this.adjacencyList[current]);
            }
        }
    }

    bfsShortestPath(start, end) {
        const queue = [start];
        const visited = {};
        while (queue.length) {
            const current = queue.shift();
            if (!visited[current]) {
                visited[current] = true;
                if (current === end) {
                    return visited;
                }
                queue.push(...this.adjacencyList[current]);
            }
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.bfs("A");

// Task 10 : Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
const shortestPath = graph.bfsShortestPath('A', 'F');
console.log('Shortest path from A to F:', shortestPath);