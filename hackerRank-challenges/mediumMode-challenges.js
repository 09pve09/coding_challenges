'use strict';
/*
Stacks
A stack is a data structure that uses a principle called Last-In-First-Out (LIFO), meaning that the last object added to the stack must be the first object removed from it.

At minimum, any stack should be able to perform the following three operations:

Peek: Return the object at the top of the stack (without removing it).
Push: Add an object passed as an argument to the top of the stack.
Pop: Remove the object at the top of the stack and return it.

In addition, it's often helpful to implement a method to check whether or not a stack is empty to ensure you are not attempting to perform peek or pop operations on an empty stack.
 */

class Stack {
	constructor() {
		this.storage = [];
		this.top = 0;
	}

	isEmpty() {
		return this.storage.length === 0;
	}

	peek() {
		return this.isEmpty ? undefined : this.storage[this.top - 1];
	}

	push(value) {
		this.storage[this.top++] = value;
		// this.storage.push(value);
		// this.top++;
	}

	pop () {
		if (!this.isEmpty()) {
			let temp = this.storage[--this.top];
			this.storage.splice(this.storage.length - 1, 1);
			return temp;
		}
		return null;
	}

	size() {
		return this.top;
	}

	// Implement function popAt which performs a pop operation on a specific sub-stack
	popAt(index) {
		if (!this.isEmpty()) {
			if (index >= 0 || index <= this.storage.length - 1) {
				var temp = this.storage[index];
				this.top-- && this.storage.splice(index, 1);
				return temp;
			}
		}
		return null;
	}

	// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
	sortStack() {
		if (!this.isEmpty()) {
			let sorted = false;
			while (!sorted) {
				sorted = true;
				for (let i = 0; i < this.storage.length; i++) {
					if (this.storage[i] < this.storage[i + 1]) {
						sorted = false;
						let temp = this.storage[i];
						this.storage[i] = this.storage[i + 1];
						this.storage[i + 1] = temp;
					}
				}
			}
		} else {
			return null;
		}
	}
}

// Tests
// let stack = new Stack();
// stack.push(1);
// stack.push(5);
// stack.push(4);
// stack.push(3);
// stack.sortStack();
// // console.log(stack.storage);
// console.assert(stack.storage === [1, 2], '[1, 2]');
// console.assert(stack.top === 2, 'should equal 2');
// console.assert(stack.peek(), '2');
// stack.push(3);
// console.assert(stack.storage, '[1, 2, 3]'); 
// console.assert(stack.top, '3');
// console.assert(stack.peek(), '3');
// console.assert(stack.storage, '[1, 2]');
// console.assert(stack.top, '2');
// console.assert(stack.peek(), '2');
// console.assert(stack.top, '0');
// console.assert(stack.peek(), 'null');

/*
Queues
A queue is an abstract data type that uses a principle called First-In-First-Out (FIFO), meaning that the first object added to the queue must be the first object removed from it. You can analogize this to a checkout line at a store where the line only moves forward when the person at the head of it has been helped, and each person in the line is directly behind the person whose arrival immediately preceded theirs.

At minimum, any queue should be able to perform the following two operations:

Enqueue: Add an object to the back of the line.
Dequeue: Remove the object at the head of the line and return it; the element that was previously second in line is now at the head of the line.

In addition, it's often helpful to implement a method to check whether or not a queue is empty to ensure you are not attempting to perform dequeue operations on an empty queue.
 */

class Queue {
	constructor() {
		this.storage = [];
		this.front = 0;
		this.back = 0;
	}

	enqueue(value) {
		this.storage[this.back++] = value;
	}

	dequeue() {
		let temp = this.storage[this.front];
		delete this.storage[this.front];
		this.size() && this.front++;
		return temp;
	}

	size() {
		return this.back - this.front;
	}

	isEmpty() {
		return this.size() === 0;
	}
}

// Tests
// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.enqueue(1)
// queue.dequeue();
// // console.assert(queue.isEmpty() === 2, 'should equal 2');
// console.assert(queue.isEmpty() === false, 'should equal false');
// queue.dequeue();
// queue.dequeue();
// console.assert(queue.size() === 0, 'should equal 0');
// console.assert(queue.isEmpty() === true, 'should equal true');
// console.assert(queue.storage === [2, 3], 'should equal [2, 3]');

/*
Queue with Two Stacks
https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks
 */

// The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
// The unshift([element1,..., elementN]) method adds one or more elements to the beginning of an array and returns the new length of the array.
// The pop() method removes the last element from an array and returns that element.
// The push([element1,..., elementN]) method adds one or more elements to the end of an array and returns the new length of the array.


class StackQueue {
	constructor () {
		this.storage = {};
		this.length = 0;
	}

	push(value) {
		this.storage[this.length++] = value;
	}

	pop() {
		if (this.length) {
			let val = this.storage[this.length];
			delete this.storage[this.length];
			this.length--;
			return val;
		}
		return null;
	}

	size() {
		return this.length;
	}
}

class QueueTwoStacks {
	constructor() {
		this.inbox = new StackQueue();
		this.outbox = new StackQueue();
		this.length = 0;
	}

	enqueue(value) {
		++this.length && this.inbox.push(value);
	}

	dequeue() {
		if (this.length > 0) {
			while (this.inbox.size() > 0) {
				this.outbox.push(this.inbox.pop());
			}
			this.length--;
			return this.outbox.pop();
		}
		return null;
	}

	size() {
		return this.length;
	}
}

// let queue = new QueueTwoStacks();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// // console.log(queue);
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(4);
// queue.enqueue(5);
// // console.log(queue);
// queue.dequeue();
// console.log(queue);
// console.log(queue.size());
// queue.dequeue();
// console.log(queue.dequeue());
// console.log(queue);

// HackerRank answer:
/*
function processData(input) {
  let func = [enqueue, dequeue, print];
  let queries = input.split('\n');
  let queryLength = parseInt(queries[0]);
  let queue = [];
  for (var i = 1; i <= queryLength; i++) {
    let currQuery = queries[i].split(' ');
    func[currQuery[0] - 1](queue, currQuery[1]);
  }
}

function enqueue(queue, value) {
  queue[queue.length] = value;
}

function dequeue(queue) {
  queue.shift();
}

function print(queue) {
  console.log(queue[0]);
}
 */