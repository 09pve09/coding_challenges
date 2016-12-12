/*
Create a Linked List Class

Extra credit: Doubly Linked List
 */

class Node {
	constructor(val) {
		this.value = val || null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null;
		this.length = 0;
	}

	/*
	Append value to end of list.
	Time Complexity:
	Auxiliary Complexity:
	 */
	append(value) {
		let node = new Node(value);
		if (!this.head) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = this.tail.next;
		}
		this.length++;
	}

	/*
	Insert value at given index (assume head is index 0).
	Time Complexity:
	Auxiliary Complexity:
	 */
	insertAt(value, index) {
		let node = new Node(value);
		let currNode = this.head;
		let i = 0;
		let previous;

		if (index > this.length) {
			return 'Index is out of range!';
		}
		
		if (index === this.length) {
			// 1 -> 5 -> 10 -> 15
			let temp = this.tail;
			temp.next = node;
			this.tail = node;
			this.length++;
			return;
		}

		while (currNode) {
			if (index === i) {
				if (index === this.length - 1) {
					previous.next = node;
					previous.next.next = currNode;
				} else if (index === 0) {
					let temp = this.head;
					this.head = node;
					this.head.next = temp;
				} else {
					let temp = currNode;
					currNode = node;
					currNode.next = temp;
				}
				this.length++;
				return;
			} else {
				i++;
				previous = currNode;
				currNode = currNode.next;
			}
		}
		return null;
	}

	/*
	Remove a node at a given index
	Time Complexity:
	Auxiliary Complexity:
	 */
	delete(index) {
		let currNode = this.head;
		let i = 0;
		let previous;

		if (index > this.length - 1) {
			return 'Index is out of range';
		}

		while (currNode) {
			if (index === i) {
				// 1 -> 2
				if (index === 0) {
					this.head = currNode.next;
				} else if (index === this.length - 1) {
					// 1 -> 2 -> 4
					this.tail = previous;
					this.tail.next = null;
				} else { // 1 -> 2 -> 3 -> 4
					previous.next = currNode.next;
				}
				this.length--;
				return;
			} else {
				i++;
				previous = currNode;
				currNode = currNode.next;
			}
		}
		return null;
	}

	/*
	A method that checks to see if a value is contained within the list.
	Time Complexity:
	Auxiliary Complexity:
	 */
	contains(value) {
		let currNode = this.head;
		while (currNode) {
			if (value === currNode.value) {
				return true;
			}
			currNode = currNode.next;
		}
		return false;
	}
}

// Tests
// var ll = new LinkedList();
// ll.append(5);
// ll.append(10);
// ll.insertAt(17, 2);
// console.log(ll);
// console.log(ll);
// ll.append(1);
// ll.append(2);
// ll.append(4);
// ll.insertAt(3, 1);
// console.assert(ll.contains(3) === true, 'Should equal true');
// ll.delete(2);
// console.assert(ll.contains(3) === false, 'Should equal false');
// ll.delete(2); // 1 -> 2 -> 4 / Should delete 4 and replace with 2
// ll.delete(0); // 1 -> 2 / Should delete 1 and leave 2
// console.assert(ll.contains(2) === true, 'Should equal true');
// console.log(ll);

// class DLLNode {
// 	constructor() {

// 	}
// }

// class DoublyLinkedList {
// 	constructor() {

// 	}
// }

module.exports = {
	LinkedList,
	Node
}
