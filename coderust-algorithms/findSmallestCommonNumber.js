/*
Find smallest common number
Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.
 */

var findSmallestCommonNumber = (array1, array2, array3) => {
	if (array1 === undefined || array2 === undefined || array3 === undefined) {
		return null;
	}

	let p1 = 0;
	let p2 = 0;
	let p3 = 0;

	while (p1 < array1.length && p2 < array2.length && p3 < array3.length) {
		if (array1[p1] === array2[p2] && array2[p2] === array3[p3]) {
			return array1[p1];
		} 

		if (array1[p1] <= array2[p2] && array1[p1] <= array3[p3]) {
			p1++;
		} else if (array2[p2] <= array1[p1] && array2[p2] <= array3[p3]) {
			p2++;
		} else if (array3[p3] <= array1[p1] && array3[p3] <= array2[p2]) {
			p3++;
		}
	}

	return -1;
}

// console.log(findSmallestCommonNumber([6, 7, 10, 25, 30, 63, 64], [-1, 4, 5, 6, 7, 8, 50], [1, 6, 10, 14]));
console.log(findSmallestCommonNumber([-1, 7, 10, 25, 30, 63, 64], [-1, 4, 5, 6, 7, 8, 50], [1, 6, 7, 10, 14]));

