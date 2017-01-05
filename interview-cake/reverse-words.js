/*
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backwards! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a string message and reverses the order of the words in-place.

For example:

  var message = 'find you will pain only go you recordings security the into if';

reverseWords(message);
// returns: 'if into the security recordings you go only pain will you find'

When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
 */

// var reverseWords = str => {
// 	str = str.split(' ');
// 	// Go through half the words and switch
// 	for (let i = 0; i < Math.floor(str.length / 2); i++) {
// 		let temp = str[i];
// 		str[i] = str[str.length - 1 - i];
// 		str[str.length - 1 - i] = temp;
// 	}
// 	return str.join(' ');
// }

var reverseWords = str => {
	str = str.split(' ');
	let startIndex = 0;
	let endIndex = str.length - 1;

	while (startIndex < endIndex) {
		let temp = str[startIndex];
		str[startIndex] = str[endIndex];
		str[endIndex] = temp;

		startIndex += 1;
		endIndex -= 1;
	}
	return str.join(' ');
}

// console.log(reverseWords('find you will pain only go you recordings security the into if'));
// console.log(reverseWords('the eagle has landed'));