/*
1.1
isUnique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */
// Time Complexity: O(n^2)
// Auxiliary Complexity: O(1)
const isUnique = str => {
	var count = 0;
	var pointer;
	for (var i = 0; i < str.length; i++) {
		pointer = str[i];
		for (var j = i + 1; j < str.length; j++) {
			if (pointer === str[j]) {
				return false;
			}
		}
	}
	return true;
};

// Tests
// console.log('Should equal true: ', isUnique('Zohar'));
// console.log('Should equal true: ', isUnique('Sanchez'));
// console.log('Should equal false: ', isUnique('Hello'));
// console.log('Should equal false: ', isUnique('Goodbye'));
// console.log('Should equal false: ', isUnique('Julius'));
// console.log('Should equal false: ', isUnique('Evening'));

/*
1.2
Check Permutation: Given two strings, write a method to decide if one is apermutation of the other.
 */

const putIntoTable = (str, obj) => {
	for (var i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = 1;
		} else {
			obj[str[i]]++;
		}
	}
	return obj;
}
 
const checkPermutation = (str1, str2) => {
	var lookUpTable = {};
	if (str1.length !== str2.length) {
		return false;
	}
	var firstStrInTable = putIntoTable(str1, lookUpTable);
	var secondStrInTable = putIntoTable(str2, lookUpTable);

	for (var key in lookUpTable) {
		if (lookUpTable[key] % 2 !== 0) {
			return false;
		}
	}
	return true;

	// Clean solution - using native sort method - not efficient
	// var sortedStr1 = str1.split('').sort(function(a, b) { return a.localeCompare(b);}).join('');
	// var sortedStr2 = str2.split('').sort(function(a, b) { return a.localeCompare(b);}).join('');
	// return sortedStr1 === sortedStr2;
};

// console.log('Should equal false: ', checkPermutation('race', 'car'));
// console.log('Should equal true: ', checkPermutation('race', 'care'));
// console.log('Should equal true: ', checkPermutation('butterpeanut', 'peanutbutter'));

/*
1.3
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
I: "Mr John Smith "
O: "Mr%20John%20Smith"
 */
const URLify = str => {
	str = str.replace(/[' ']/gi,'%20');
	return str;
	// let results = '';
	// for (var i = 0; i < str.length; i++) {
	// 	if (str[i] === ' ') {
	// 		results += '%20';
	// 	} else {
	// 		results += str[i];
	// 	}
	// }
	// return results;
};
// console.log(URLify("Let's go get some pizza!"));

/*
PalindromePermutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
I: Tact Coa
O: True (permutations: 'taco cat', 'atco cta', etc.)
 */
const palindromePer = str => {
	str = str.replace(/[_+-.,!?@#$%^&*();\/|<>"']/g, '');
	// console.log(str);
	str = str.toLowerCase().split(' ').join('');
	// console.log(str);
	let count = 0;
	let letterObj = {};
	for (var i = 0; i < str.length; i++) {
		if (!letterObj[str[i]]) {
			letterObj[str[i]] = 1;
		} else {
			letterObj[str[i]]++;
		}
	}

	if (str.length % 2 === 0) {
		for (var num in letterObj) {
			if (letterObj[num] % 2 !== 0) {
				return false;
			}
		}
		return true;
	} else {
		for (let num in letterObj) {
			if (letterObj[num] % 2 !== 0) {
				count++;
			}
		}
	}

	return count === 1;
};

// Tests
// console.assert(palindromePer('Tact Coa') === true, 'Should equal true');
// console.assert(palindromePer('Sore was I ere I saw Eros.') === true, 'Should equal true');
// console.assert(palindromePer('Never a foot too far, even') === true, 'Should equal true');
// console.assert(palindromePer('Euston saw I was not Sue.') === true, 'Should equal true');
// console.assert(palindromePer('A new order began, a more Roman age bred Rowena.') === true, 'Should equal true');
// console.assert(palindromePer('Red Roses run no risk, sir, on nurses order.') === true, 'Should equal true');
// console.assert(palindromePer('Resume so pacific a pose, muser.') === true, 'Should equal true');
// console.assert(palindromePer('Egad, a base life defiles a bad age.') === true, 'Should equal true');
// console.assert(palindromePer('I, man, am regal; a German am I.') === true, 'Should equal true');