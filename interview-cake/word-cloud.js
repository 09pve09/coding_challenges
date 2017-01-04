/*
You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

Think about capitalized words. For example, look at these sentences:

"After beating the eggs, Dana read the next step:"
"Add milk and eggs, then add flour and sugar."
What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

Assume the input will only contain words and standard punctuation.

You could make a reasonable argument to use regex in your solution. We won't, mainly because performance is difficult to measure and can get pretty bad.
65 - 90
 */

// let checkMap = word => {
// 	let word = str[i];
// 	let firstChar = word.charCodeAt(0);
// 	let smallToBig = word[0].toUpperCase() + word.slice(1);
// 	let bigToSmall = word[0].toLowerCase() + word.slice(1);
// 	if (map.get(smallToBig)) {
// 		let counterUp = map.get(smallToBig);
// 		map.set(smallToBig, ++counterUp);
// 	} else if (map.get(bigToSmall)) {
// 		let countUp = map.get(bigToSmall);
// 		map.set(bigToSmall, ++countUp);
// 	}
// }

var isLetter = character => {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
}

var isPunctuation = character => {
	return '!\'?,.:;"'.indexOf(character) >= 0;
}


// var splitWords = inputString => {
//   var words = [];
//   var currentWord = '';
//   for (var i = 0; i < inputString.length; i++) {
// 	  var character = inputString[i];
// 	  if (character === ' ' || character === ) {
// 	      words.push(currentWord);
// 	      currentWord = '';
// 	  } else if (isLetter(character)) {
// 	      currentWord += character;
// 	  }
//   }
//   return words;
// }

class WordCloudData {
	constructor(input) {
		this.wordMap = new Map();
		this.splitUp(input);
	}

	splitUp(str) {
		var currentWord = '';
		for (let i = 0; i < str.length; i++) {
			let character = str[i];
			if (i === str.length - 1) {
				if (this.isLetter(character)) {
					currentWord += character;
				}
				if (currentWord.length) {
					this.addToWordCloud(currentWord);
				}
			} else if (character === ' ' || character === '\u2014') {
				if (currentWord.length) {
					this.addToWordCloud(currentWord);
				}
				currentWord = '';
			} else if (character === '.') {
				if (i < str.length - 1 && str[i + 1] === '.') {
					if (currentWord.length) {
						this.addToWordCloud(currentWord);
					}
					currentWord = '';
				}
			} else if (this.isLetter(character) || character === '\'') {
				currentWord += character;
			} else if (character === '-') {
				if (i > 0 && this.isLetter(str[i - 1]) && this.isLetter(str[i + 1])) {
					currentWord += character;
				}
			}
		}
	}

	// We're going to delete uppercase words ONLY if
	// they are always uppercase. For example: 'Add' gets
	// added in, but if 'add' appears, then we delete the uppercase
	// and put in 'add' plus increase the count
	addToWordCloud(word) {
		var count;
		if (this.wordMap.has(word)) {
			count = this.wordMap.get(word) + 1;
			this.wordMap.set(word, count);
		} else if (this.wordMap.has(word.toLowerCase())) {
			count = this.wordMap.get(word.toLowerCase()) + 1;
			this.wordMap.set(word.toLowerCase(), count);
		} else if (this.wordMap.has(this.capitalize(word))) {
			count = this.wordMap.get(this.capitalize(word)) + 1;
			this.wordMap.set(word, count);
			this.wordMap.delete(this.capitalize(word));
		} else {
			this.wordMap.set(word, 1);
		}
	}

	capitalize(word) {
		return word[0].toUpperCase() + word.slice(1);
	}

	isLetter(character) {
		return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
	}

	// isPunctuation(character) {
	// 	return '!\'?,.-'.indexOf(character) >= 0;
	// }

}

var wordCloud = new WordCloudData("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars.");
// var wordCloud = new WordCloudData("The wheels on The bus go round and round. The wheels came off.");
console.log(wordCloud.wordMap);

// console.log(wordCloud("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars."))



// var wordCloud = str => {
// 	var map = new Map();
// 	str = str.split(' ');
// 	for (let i = 0; i < str.length; i++) {
// 		let word = str[i];
// 		let firstChar = word.charCodeAt(0);
// 		let smallToBig = word[0].toUpperCase() + word.slice(1);
// 		let bigToSmall = word[0].toLowerCase() + word.slice(1);
// 		if (!map.get(word)) {
// 			// If we are trying to add 'big' but already have 'Big' check
// 			if (map.get(smallToBig)) {
// 				let counterUp = map.get(smallToBig);
// 				map.set(smallToBig, ++counterUp);
// 			} else if (map.get(bigToSmall)) {
// 				let countUp = map.get(bigToSmall);
// 				map.set(bigToSmall, ++countUp);
// 			} else {
// 				map.set(word, 1);
// 			}
// 		} else {
// 			if (map.get(smallToBig)) {
// 				let counterUp = map.get(smallToBig);
// 				map.set(smallToBig, ++counterUp);
// 			} else if (map.get(bigToSmall)) {
// 				let countUp = map.get(bigToSmall);
// 				map.set(bigToSmall, ++countUp);
// 			}
// 		}
// 		// if (!map.get(word)) {
// 		// 	if (firstChar >= 65 && firstChar <= 90) {
// 		// 		map.set(word, 1);
// 		// 	} else if ((firstChar >= 97 || firstChar <= 122) && map.get(smallToBig)) {
// 		// 		counterUp = map.get(smallToBig);
// 		// 		map.set(smallToBig, ++counterUp);
// 		// 	}
// 		// }
// 	}
// 	return map;
// }
