/*
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.
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

let superbalanced = root => {
	// We have an unbalanced tree when:
	// 1. There are more than 2 different leaf depths
	// 2. There are exactly 2 leaf depths and they are more than 1 apart
	let depths = [];
	let nodes = [];
	nodes.push([root, 0]);

	while (nodes.length) {
		let nodePairs = nodes.pop();
		let node = nodePairs[0];
		let depth = nodePairs[1];
		console.log(node.value);
		if (!node.left && !node.right) {
			if (depths.indexOf(depth) < 0) {
				depths.push(depth);
				if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
					return false;
				}
			}
		} else {
			if (node.left) {
				nodes.push([node.left, depth + 1]);
			}
			if (node.right) {
				nodes.push([node.right, depth + 1]);
			}
		}
	}

	return true;
};

// var bst = new BinaryTreeNode(5);
// bst.left = new BinaryTreeNode(3);
// bst.left.left = new BinaryTreeNode(2);
// bst.left.right = new BinaryTreeNode(4);
// bst.right = new BinaryTreeNode(6);
// bst.right.right = new BinaryTreeNode(7);
// bst.right.right.right = new BinaryTreeNode(8);
var bst = new BinaryTreeNode(7);
bst.left = new BinaryTreeNode(3);
bst.left.left = new BinaryTreeNode(2);
bst.left.right = new BinaryTreeNode(6);
bst.left.right.left = new BinaryTreeNode(5);
bst.right = new BinaryTreeNode(8);
console.log(superbalanced(bst));