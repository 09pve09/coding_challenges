/*
Move zeros to left
Given an integer array, move all elements containing '0' to the left while maintaining the order of other elements in the array.
 */

var arr = [1, 10, 20, 0, 59, 63, 0, 88, 0];

// var moveZerosLeft = array => {
// 	if (array.length <= 1) {
// 		return null;
// 	}

// 	let p1 = array.length - 1;
// 	let p2 = array.length - 1;

// 	while (p2 >= 0) {

// 		if (p1 < 0) {
// 			array[p2] = 0;
// 			p2--;
// 		} else if (array[p1] !== 0) {
// 			array[p2] = array[p1];
// 			p2--;
// 		}
// 		p1--;
// 	}
// 	return array;
// }

var moveZerosLeft = array => {
	if (array.length <= 1) {
		return null;
	}

	let p1 = array.length - 1;
	let p2 = array.length - 1;

	while (p1 >= 0) {
		if (array[p1] !== 0) {
			array[p2] = array[p1];
			p2--;
		}
		p1--;
	}

	while (p2 >= 0) {
		array[p2] = 0;
		p2--;
	}

	return array;
}

console.log(moveZerosLeft(arr));
console.log(moveZerosLeft([1, 0, 0]));