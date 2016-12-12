// My solution:
const kthToLast=(k, head)=>{
	let currNode = head;
	let beginning = currNode;
	let end = null;
	let counter = 1;

	while (currNode && k !== 0) {
		if (counter === k) {
			end = currNode;
		}
		if (counter > k) {
			beginning = beginning.next;
			end = currNode;
		}
		currNode = currNode.next;
		counter++;
	}
	return (k === 0 || k < 1) ? null : beginning;
}

	

/*const kthToLast = (k, head) => {
	if (k < 1) {
		throw new Error('kth must be larger than 0');
	}

	let beginning = head;
	let end = head;

	for (let i = 0; i < k - 1; i++) {
		if (!end.next) {
			throw new Error('k is larger than the length of the linked list');
		}

		end = end.next;
	}

	while (end.next) {
		beginning = beginning.next;
		end = end.next;
	}
	return beginning;
}
*/

function LinkedListNode(value) {
	this.value = value;
	this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;


console.log(kthToLast(-1, a));