/*
Search rotated array
Search a given number in a sorted array that has been rotated by some arbitrary number.

Runtime Complexity
Logarithmic, O(logn)

Memory Complexity
Logarithmic, O(logn).
We can make the search iterative to get constant memory complexity.
 */

var searchRotatedArray = (array, value) => {
	return binarySearch(array, 0, array.length - 1, value);
};

var binarySearch = (array, start, end, value) => {
	if (start > end) {
		return -1;
	}

	let mid = start + Math.floor((end - start)/ 2);
	console.log(mid)

	if (array[mid] === value) {
		return mid;
	}

	if (array[start] < array[mid] && value < array[mid] && value >= array[start]) {
		return binarySearch(array, start, mid - 1, value);
	} else if (array[mid] < array[end] && value > array[mid] && value <= array[end]) {
		return binarySearch(array, mid + 1, end, value);
	} else if (array[start] > array[mid]) {
		return binarySearch(array, start, mid - 1, value);
	} else if (array[end] < array[mid]) {
		return binarySearch(array, mid + 1, end, value);
	}

	return -1;
}

// console.assert(searchRotatedArray([176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162], 200) === 3, 'Should equal 3');
// console.assert(searchRotatedArray([4, 5, 6, 7, 8, 9, 10, 1], 3) === -1, 'Should equal -1');
// console.assert(searchRotatedArray([4, 5, 6, 7, 8, 9, 10, 1], 10) === 6, 'Should equal 6');
console.log(searchRotatedArray([4, 5, 6, 7, 8, 9, 10, 1], 10));
// console.assert(searchRotatedArray([9, 10, 1, 4, 5, 6, 7, 8], 9) === 0, 'Should equal 0');

