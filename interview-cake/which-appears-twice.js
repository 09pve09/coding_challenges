/*
I have an array where every number in the range 1...n appears once except for one number which appears twice.
Write a function for finding the number that appears twice.
 */

var appearsTwice = array => {
	let range = array.length - 1;
	let firstEquation = ((range * range) + range) / 2;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	let result = sum - firstEquation;
	return result === range + 1 ? null : result;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(appearsTwice(arr));