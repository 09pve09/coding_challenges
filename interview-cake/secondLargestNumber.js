/*
Write a function to find the 2nd largest element in a binary search tree.
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

var findLargest = root => {
	let curr = root;
	while (curr) {
		if (!curr.right) {
			return curr.value;
		}
		curr = curr.right;
	}
}

// var bst = new BinaryTreeNode(7);
// bst.right = new BinaryTreeNode(8);
// bst.right.right = new BinaryTreeNode(13);
// bst.right.right.right = new BinaryTreeNode(18);
// console.log(findLargest(bst));

var findSecondLargest = root => {
	let curr = root;

	if (curr === null || (curr.right === null && curr.left === null)) {
		throw new Error('We must have more than two nodes in our tree');
	}

	while (curr) {
		if (curr.left && curr.right === null) {
			return findLargest(curr.left);
		}
		if (curr.right && (curr.right.left === null && curr.right.right === null)) {
			return curr.value;
		}
		curr = curr.right;
	}
}

var bst = new BinaryTreeNode(7);
bst.right = new BinaryTreeNode(8);
bst.right.right = new BinaryTreeNode(13);
bst.right.right.right = new BinaryTreeNode(18);
bst.right.right.right.left = new BinaryTreeNode(15)
bst.right.right.right.left.right = new BinaryTreeNode(16);
bst.right.right.right.left.right.right = new BinaryTreeNode(17);

console.log(findSecondLargest(bst));

/*
NOTES:
in-order BST traversal:
function inorderPrint(node) {
    if (node) {
        inorderPrint(node.left);
        console.log(node.value);
        inorderPrint(node.right);
    }
}
 */

/*
var findLargestValue = root => {
	let curr = root;
	while (curr) {
		if (!curr.right) {
			return curr.value;
		}
		curr = curr.right;
	}
}

var secondLargestNumber = root => {
	let curr = root;

	while (curr) {
		if (curr.right && (!curr.right.left && !curr.right.right)) {
			return curr.right.value;
		}
		if (!curr.right && curr.left) {
			return findLargestValue(curr.left);
		}
		curr = curr.right;
	}
};
 */
