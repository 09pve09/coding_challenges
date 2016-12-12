/*
Valid Binary Search Tree
Write a function to check that a binary tree is a valid binary search tree.
 */

/*
Notes:
A valid binary search tree is one that is balanced...yes?
 */

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

let validBST = root => {
	let nodeAndBoundsStack = [];
	nodeAndBoundsStack.push({node: root, lower: -Infinity, higher: Infinity});

	while (nodeAndBoundsStack.length) {
		let nodeAndBounds = nodeAndBoundsStack.pop();
		let node = nodeAndBounds.node,
				lower = nodeAndBounds.lower,
				higher = nodeAndBounds.higher;
				
		if (node.value < lower || node.value > higher) {
			return false;
		}

		if (node.left) {
			nodeAndBoundsStack.push({node: node.left, lower: lower, higher: node.value});
		}
		if (node.right) {
			nodeAndBoundsStack.push( {node: node.right, lower: node.value, higher: higher});
		}
	}

	return true;
}

// var bst = new BinaryTreeNode(5);
// bst.left = new BinaryTreeNode(3);
// bst.left.left = new BinaryTreeNode(2);
// bst.left.right = new BinaryTreeNode(4);
// bst.right = new BinaryTreeNode(7);
// bst.right.left = new BinaryTreeNode(6);
// bst.right.right = new BinaryTreeNode(8);
var bst = new BinaryTreeNode(5);
bst.left = new BinaryTreeNode(3)
bst.left.left = new BinaryTreeNode(2)
bst.left.right = new BinaryTreeNode(6);
bst.right = new BinaryTreeNode(8);
bst.right.left = new BinaryTreeNode(7);
bst.right.right = new BinaryTreeNode(10);
console.log(validBST(bst));