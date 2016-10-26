// Chapter 8 - Recursion and Dynamic Programming

/*
8.1
Triple Step: A child is running up a staircase with n steps and hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the chlid can run up the stairs.
 */

const tripleStep = steps => {
	// Write your code here!
};

/*
8.2
Robot in a grid: Imagine a robot sitting on th eupper left corner of grid with r rows and c columns. The roboto can only move in two diections, right and down, but certain cells are 'off limits' such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
 */

/*
8.3
Magic Index:
 */

/*
8.4
Power Set:
 */

/*
8.5
Recursive Multiply:
 */

/*
8.6
Towers of Hanoi:
 */

/*
8.7
Permutations without Dups:
 */

/*
8.8
Permutations with Dups:
 */

/*
8.9
Parens: Implement an algorithm to print all valid (e.g. properly opened and closed) combinations of n pairs of parentheses.
Input: 3
Output: ['((()))', '(()())', '(())()', '()(())', '()()()']
 */

const parens = n => {
	let results = [];

	let parenCombinations = (combo, open, close, balance) => {
		// Base case:
		if (combo.length === n * 2) {
			results.push(combo);
			return;
		}
		// Recursive case:
		// Add an open paren
		if (open > 0) {
			parenCombinations(combo + '(', open - 1, close, balance + 1);
		}
		// Or add a close
		if (close > 0 && balance > 0) {
			parenCombinations(combo + ')', open, close - 1, balance - 1);
		}

	};
// (
  parenCombinations('', n, n, 0);
  return results;
}
console.log(parens(3));


/*
8.10
Paint Fill:
 */

/*
8.11
Coins:
 */

/*
8.12
Eight Queens:
 */

/*
8.13
Stack of Boxes:
 */

/*
8.14
Boolean Evaluations:
 */