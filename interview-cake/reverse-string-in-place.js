/*
Write a function to reverse a string in-place.
 */

var reverseStr = str => {
	// return str.split('').reverse().join('');
	str = str.split('');
	let startIndex = 0;
	let endIndex = str.length - 1;

	while (startIndex < endIndex) {
		let temp = str[startIndex];
		str[startIndex] = str[endIndex];
		str[endIndex] = temp;

		endIndex--;
		startIndex++;
	}
	return str.join('');
}

console.log(reverseStr('good luck!'));
console.log(reverseStr('love you!'));