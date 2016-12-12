/*
Move zeros to left
Given an integer array, move all elements containing '0' to the left while maintaining the order of other elements in the array.
 */

var zerosToLeft = array => {
	if (array.length < 1) {
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

console.log(zerosToLeft([1, 0, 1]));
console.log(zerosToLeft([1, 0, 1, 1, 0, 0]));