/*
Implement a queue with 2 stacks. Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).
Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1) time push and pop.
 */

class Stack {
	constructor() {
		this.storage = [];
		this.top = 0;
	}

	// Adds an item
	push(value) {
		this.storage[this.top++] = value;
	}

	// Removes and returns the top item
	pop() {
		if (!this.isEmpty()) {
			let temp = this.storage[--this.top];
			this.storage.splice(this.storage.length - 1, 1);
			return temp;
		}
	}

	// Returns the item on the top of the stack, without removing it.
	peek() {
		return this.isEmpty() ? undefined : this.storage[this.top - 1];
	}

	// Returns true if the stack is empty, false otherwise
	isEmpty() {
		return this.storage.length === 0;
	}
}

// Tests
// var stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.storage);
// console.log(stack.peek());
// console.log(stack.pop())
// console.log(stack.isEmpty())
// console.log(stack.peek());

class QueueTwoStacks {
	constructor() {
		this.inbox = [];
		this.outbox = [];
	}

	enqueue(value) {
		this.inbox.push(value);
	}

	dequeue() {
		if (this.outbox.length === 0) {
			while (this.inbox.length > 0) {
				this.outbox.push(this.inbox.pop());
			}
		}
		return this.outbox.pop();
	}

	// My first solution
	// constructor() {
	// 	this.inbox = new Stack();
	// 	this.outbox = new Stack();
	// 	this.length = 0;
	// }

	// enqueue(value) {
	// 	++this.length && this.inbox.push(value);
	// }

	// dequeue() {
	// 	if (this.length > 0) {
	// 		if (!this.outbox.isEmpty()) {
	// 			this.length--;
	// 			return this.outbox.pop();
	// 		}
	// 		while (!this.inbox.isEmpty()) {
	// 			this.outbox.push(this.inbox.pop());
	// 		}
	// 		this.length--;
	// 		return this.outbox.pop();
	// 	}
	// 	return null;
	// }

	// peek() {}

	// isEmpty() {}
}

var queueTwoStacks = new QueueTwoStacks();
// queueTwoStacks.enqueue('a');
// queueTwoStacks.enqueue('b');
// queueTwoStacks.enqueue('c');
// queueTwoStacks.enqueue('d');
// // console.log(queueTwoStacks);
// console.log(queueTwoStacks.dequeue());
// queueTwoStacks.enqueue('e');
// console.log(queueTwoStacks);
// console.log(queueTwoStacks.dequeue());
// console.log(queueTwoStacks.dequeue());
// console.log(queueTwoStacks.dequeue());
// console.log(queueTwoStacks.dequeue());
// console.log(queueTwoStacks);


		// if (this.outbox.length === 0) {
		// 	while (this.inbox.length > 0) {
		// 		this.outbox.push(this.inbox.pop());
		// 	}
		// 	if (this.outbox.length === 0) {
		// 		return undefined;
		// 	}
		// }
		// return this.outbox.pop();
