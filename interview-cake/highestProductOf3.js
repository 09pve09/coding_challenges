/*
Given an arrayOfInts, find the highestProduct you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

highestProductOfThree
highestProductOf2
highest
lowestProductOf2
lowest
 */

var highestProductOf3 = array => {
	if (array.length < 3) {
		return null;
	}

	let highest = Math.max(array[0], array[1]);
	let lowest = Math.min(array[0], array[1]);

	let highestProductOf2 = array[0] * array[1];
	let lowestProductOf2 = array[0] * array[1];

	let highestProductOf3 = array[0] * array[1] * array[2];

	for (let i = 2; i < array.length; i++) {
		let curr = array[i];

		// We also multiply the lowest in case that current and lowestProductOf2 are both low negative numbers, this product is a high positive number
		highestProductOf3 = Math.max(highestProductOf3, curr * highestProductOf2, curr * lowestProductOf2);

		highestProductOf2 = Math.max(highestProductOf2, curr * highest, curr * lowest);
		lowestProductOf2 = Math.min(lowestProductOf2, curr * highest, curr * lowest);

		highest = Math.max(highest, curr);
		lowest = Math.min(lowest, curr);
	}
	return highestProductOf3;
};

// console.log(highestProductOf3([1, 2]));
console.log(highestProductOf3([1, 2, 4]));
// console.log(highestProductOf3([4, 2, 7, 6, 9]));
// console.assert(highestProductOf3([3, 2, 5, 9, 8]) === 360, 'should equal 9');