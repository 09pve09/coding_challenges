/*
Suppose we had an array of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?
 */

// IC solution
var findInOrderedSet = (array, target) => {
	// let floor = -1;
	// let ceiling = array.length;

	// while (floor + 1 < ceiling) {
	// 	let distance = ceiling - floor;
	// 	console.log('this is distance', distance)
	// 	let midIndex = Math.floor(distance / 2);
	// 	let guessIndex = floor + midIndex;

	// 	let guessValue = array[guessIndex];
	// 	console.log(guessValue)
	// 	if (guessValue === target) {
	// 		return true;
	// 	}
	// 	if (guessValue > target) {
	// 		ceiling = guessIndex;
	// 	} else {
	// 		floor = guessIndex;
	// 	}
	// }
	// return false;
};



// My solution
// var findInOrderedSet = (array, target) => {
// 	let firstElement = array[0];
// 	let lastElement = array[array.length - 1];
// 	return (target >= firstElement && target <= lastElement) ? true : false;
// };

// console.assert(findInOrderedSet([1, 2, 3, 4, 5, 6, 7, 8], 9) === false, 'Should equal false');
// console.assert(findInOrderedSet([1, 2, 3, 4, 5, 6, 7, 8], -1) === false, 'Should equal false');
// console.assert(findInOrderedSet([1, 2, 3, 4, 5, 6, 7, 8], 0) === false, 'Should equal false');
console.assert(findInOrderedSet([1, 2, 3, 4, 5, 6, 7, 8], 5) === true, 'Should equal true');
// console.assert(findInOrderedSet([1, 2, 3, 4, 5, 6, 7, 8], 7) === true, 'Should equal true');
// console.assert(findInOrderedSet([1, 2, 3, 4, 5, 6, 7, 8], 8) === true, 'Should equal true');
// console.assert(findInOrderedSet([1, 2, 3, 4, 5, 6, 7, 8], 1) === true, 'Should equal true');
