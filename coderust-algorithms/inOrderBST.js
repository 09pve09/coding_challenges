var bst = require('../data-structures/bst');

class InOrderTraversal {
	constructor(root) {
		this.stack = [];
		this.nodes = [];
		while (root) {
			this.stack.push(root);
			root = root.leftChild;
		}
	}

	hasNext() {
		return this.stack.length !== 0;
	}

	getNext() {
		if (!this.hasNext()) {
			return null;
		}
		
		let rootVal = this.stack.pop();
		this.nodes.push(rootVal.value);
		let tempRoot = rootVal.rightChild;

		while(tempRoot) {
			this.stack.push(tempRoot);
			tempRoot = tempRoot.leftChild;
		}

		return rootVal;
	}
}

// class InOrderTraversal {
// 	constructor(rootNode) {
// 		this.root = rootNode;
// 		this.stack = [];
// 		this.nodes = [];
// 	}

// 	hasNext() {
// 		return this.root || this.nodes.length > 0;
// 	}

// 	getNext() {
// 		if (this.hasNext()) {
// 			while (this.root) {
// 				this.stack.push(this.root);
// 				this.root = this.root.leftChild;
// 			}

// 			if (!this.root) {
// 				let currentNode = this.stack.pop();
// 				this.nodes.push(currentNode.value);
// 				this.root = currentNode.rightChild;
// 				return currentNode.value;
// 			} else {
// 				return null;
// 			}
// 		}
// 	}

// 	getNodes() {
// 		return this.nodes;
// 	}
// }

// Tests
let test = new bst.BinarySearchTree();
[100, 50, 200 , 75, 125, 350, 80].forEach(node => {
	test.insert(node);
});

let inOrder = new InOrderTraversal(test.root);
console.log(inOrder.getNext());
// console.log(inOrder.getNodes());
console.log(inOrder.getNext());
// console.log(inOrder.getNodes());
console.log(inOrder.getNext());
// console.log(inOrder.getNodes());
console.log(inOrder.getNext());
// console.log(inOrder.getNodes());
console.log(inOrder.getNext());
// console.log(inOrder.getNodes());
console.log(inOrder.getNext());
// console.log(inOrder.getNodes());
console.log(inOrder.getNext());
// console.log(inOrder.getNodes());
console.log(inOrder.getNext());
console.log(inOrder.nodes);
// console.log(inOrder.getNodes());
// console.assert(inOrder.getNext() === 25, 'Should equal 25');