/*
Binary Search Tree

Problem 1: Node class

Prompt: Create a Node class. The Node class should contain the following properties:
- value: integer value (default null)
- leftChild: pointer to another node (initially null)
- rightChild:   pointer to another node (initially null)

Example:
var sample = new Node(1);
sample.value; // 1
sample.leftChild; // null
sample.rightChild; // null

Problem 2: BinarySearchTree class

Prompt: Create a BinarySearchTree class

The BinarySearchTree class should contain the following properties:
- root: A pointer to the root node (initially null)
size: The number of nodes in the BinarySearchTree

The BinarySearchTree class should also contain the following methods:
- insert: A method that takes takes an integer value, and creates a node with the given input.  The method will then find the correct place to add the new node. Values larger than the current node node go to the right, and smaller values go to the left.
Input: value
Output: undefined

- search: A method that will search to see if a node with a specified value exists and returns true or false if found.
Input: value
Output: boolean
 */

class Node {
	constructor(value = null) {
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
		this.size = 0;
	}

	insert(value) {
		let node = new Node(value);
		let currentNode = this.root;
		if (!currentNode) {
			this.root = node;
			this.size++;
			return;
		}
		while (currentNode) {
			if (value < currentNode.value) {
				if (!currentNode.leftChild) {
					currentNode.leftChild = node;
					this.size++;
					return;
				} else {
					currentNode = currentNode.leftChild;
				}
			} else {
				if (!currentNode.rightChild) {
					currentNode.rightChild = node;
					this.size++;
					return;
				} else {
					currentNode = currentNode.rightChild;
				}
			}
		}
	}

	search(value) {
		let currentNode = this.root;
		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}
			if (value < currentNode.value) {
				currentNode = currentNode.leftChild;
			} else {
				currentNode = currentNode.rightChild;
			}
		}
		return false;
	}
}

// Tests
// let bst = new BinarySearchTree();
// bst.insert(5);
// bst.insert(4);
// bst.insert(6);
// bst.insert(7);
// bst.insert(3);
// console.log(bst.search(3));

var findSuccessor = (bst, x) => {

}

module.exports = {
	BinarySearchTree,
	Node
}