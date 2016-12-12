/*
Find smallest common number
Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.
 */

var reverseArray = (array, start = 0, end = array.length - 1) => {

	while (start < end) {
		let temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
	// return array;
}

/*
[1, 2, 3, 4, 5]
[5, 4, 3, 2, 1]
[4, 5, 1, 2, 3]
 */
// console.log(reverseArray(arr));

var rotateArray = (array, rotation) => {
	let length = array.length;

	rotation = rotation % length;
	if (rotation < 0) {
		rotation = rotation + length;
	}
	/*
	Partition array based on 'n' rotations:
	[1, 2, 3, 4, 5] - original

	[5, 4, 3, 2, 1] - reversed
	[3, 4, 5, 2, 1] - reverse from start to end, starting at 0
	[3, 4, 5, 1, 2] - reverse the rest of array, starting at n
	 */

	reverseArray(array, 0, length - 1);
	reverseArray(array, 0, rotation - 1);
	reverseArray(array, rotation, length - 1);
	return array;
}

console.log(rotateArray([1, 2, 3, 4, 5], -2));
console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 6));