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
let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(7);
bst.insert(3);
console.log(bst.root)
// console.log(bst.search(3));

var findSuccessor = (bst, x) => {

}

module.exports = {
	BinarySearchTree,
	Node
}


/*
NOTES:

Depth-first traversal is a method for walking through a tree or graph where you go as deep as possible down a path before "fanning out." Your set of visited nodes will shoot out from the starting point along one path, with more single paths progressively shooting off of that one as each path hits a dead end.

Depth-first search or DFS uses depth-first traversal to search for something in a tree or graph.

Depth-first traversal is often compared with breadth-first traversal.

Advantages:

Depth-first traversal on a binary tree generally requires less memory than breadth-first.
Depth-first traversal can be easily implemented with recursion.
Disadvantages

A DFS doesn't necessarily find the shortest path to a node, while breadth-first search does.


Breadth-first traversal is a method for walking through a tree or graph where you "fan out" as much as possible before going deeper. Your set of visited nodes will seem to "ripple outwards" from the starting point.

Breadth-first search or BFS uses breadth-first traversal to search for something in a tree or graph.

Breadth-first traversal is often compared with depth-first traversal.

Advantages:

A BFS will not necessarily find a target as quickly as possible, but it will find the shortest path between the starting point and the target. A depth-first search will not necessarily find the shortest path.
Disadvantages

A BFS on a binary tree generally requires more memory than a DFS.
 */