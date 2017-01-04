/*
Hooray! It's opposite day. Linked lists go the opposite way today.
Write a function for reversing a linked list ↴ . Do it in-place ↴ .

Your function will have one input: the head of the list.

Your function should return the new head of the list.
 */

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var reverseLinkedList = ll => {
	let curr = ll;
	let previous = null;
	let next = null;

	while (curr) {
		next = curr.next;
		curr.next = previous;
		previous = curr;
		curr = next;
	}
	return previous;
}

var ll = new LinkedListNode(5);
ll.next = new LinkedListNode(4);
ll.next.next = new LinkedListNode(3);
ll.next.next.next = new LinkedListNode(2);
ll.next.next.next.next = new LinkedListNode(1);

console.log(reverseLinkedList(ll));
// Should return: 1 -> 2 -> 3 -> 4 -> 5

/*
// My silly attempt - which would actually keep the original!: 
var reverseLinkedList = ll => {
	let arrOfNodes = [];
	let curr = ll;

	while (ll) {
		arrOfNodes.push(ll.value);
		ll = ll.next;
	}

	let endIndex = arrOfNodes.length - 1;
	let newLL;

	while (endIndex >= 0) {
		let node = arrOfNodes[endIndex];
		newLL = new LinkedListNode(node);
		endIndex--;
	}

	return newLL;
}
 */