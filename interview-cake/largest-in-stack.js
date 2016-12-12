/*
You want to be able to access the largest element in a stack.
 */

class Stack {
	constructor() {
		this.items = [];
	}

	push(value) {
		this.items.push(value);
	}

	pop() {
		if (!this.items.length) {
			return null;
		}
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}
}

class MaxStack {
	constructor() {
		this.mainStack = new Stack();
		this.maxStack = new Stack();
	}

	push(value) {
		if (this.maxStack.items.length === 0 || value >= this.maxStack.peek()) {
			this.maxStack.push(value);
		}
		this.mainStack.push(value);
	}

	pop() {
		let poppedItem = this.mainStack.pop();
		if (this.maxStack.peek() === poppedItem) {
			this.maxStack.pop();
		}
		return poppedItem;
	}

	getMax() {
		return this.maxStack.peek();
	}
}

let stack = new MaxStack();

stack.push(3);
stack.push(1);
stack.push(5);
stack.push(0);
stack.push(9);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
