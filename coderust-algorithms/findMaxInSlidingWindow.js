/*
Given a large array of integers and a window of size 'w', find the current maximum in the window as the window slides through the entire array.
 */

var findMaximum = (array, windowSize) => {
	let result = [];

	if (windowSize > array.length) {
		return;
	}

	let window = [];

	for (let i = 0; i < windowSize; i++) {
		while (window.length > 0 && array[i] >= array[window[window.length - 1]]) { 
			window.pop();
		}
		window.push(i);
	}

	for (let i = windowSize; i < array.length; i++) {
		while () {
			
		}
	}

	return window;
};

console.log(findMaximum([-4, 2, -5, 3, 6], 3));