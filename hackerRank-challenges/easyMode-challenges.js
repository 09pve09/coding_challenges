/*
Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.

Input Format
The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

Output Format
Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output
15

Explanation
The primary diagonal is: 
11
   5
     -12

Sum across the primary diagonal: 11 + 5 - 12 = 4
The secondary diagonal is:
      4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15
 */
var diagonalDiff = function(matrix, n) {
	// Write your code here!
}

var input = [
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12]
];


// console.log(diagonalDiff(input, 3));


/*
Left Rotation Array
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

Sample Input
[1, 2, 3, 4, 5], 4

Sample Output
[5, 1, 2, 3, 4]

 */
var leftRotation = (array, rotations) => {
	// Write your code here!
}
// Tests
console.log([1, 2, 3, 4, 5], 4) // -> [5, 1, 2, 3, 4]
console.log([1, 2, 3, 4, 5], 3) // -> [4, 5, 1, 2, 3]