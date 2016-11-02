/*
Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.

Input Format
The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

Output Format
Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output
15

Explanation
The primary diagonal is: 
11
   5
     -12

Sum across the primary diagonal: 11 + 5 - 12 = 4
The secondary diagonal is:
      4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15
 */
var diagonalDiff = function(matrix, n) {
	// Write your code here!
}

var input = [
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12]
];


// console.log(diagonalDiff(input, 3));

/*
Hash Tables: Ransom Note - COME BACK TO THIS AND OPTIMIZE
A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

Input Format

The first line contains two space-separated integers describing the respective values of  (the number of words in the magazine) and  (the number of words in the ransom note). 
The second line contains  space-separated strings denoting the words present in the magazine. 
The third line contains  space-separated strings denoting the words present in the ransom note.

Constraints

.
Each word consists of English alphabetic letters (i.e.,  to  and  to ).
The words in the note and magazine are case-sensitive.
Output Format

Print Yes if he can use the magazine to create an untraceable replica of his ransom note; otherwise, print No.

Sample Input

6 4
give me one grand today night
give one grand today
Sample Output

Yes
Explanation

All four words needed to write an untraceable replica of the ransom note are present in the magazine, so we print Yes as our answer.
 */

var ransomNote = (magazine, ransom) => {
	magazine = magazine.split(' ');
	ransom = ransom.split(' ');

	var wordCount = array => {
		var wordObj = {};
		for (var i = 0; i < array.length; i++) {
			if (!wordObj[array[i]]) {
				wordObj[array[i]] = 1;
			} else {
				wordObj[array[i]]++;
			}
		}
		return wordObj;
	}

	var magazineCounter = wordCount(magazine);
	var ransomCounter = wordCount(ransom);

	for (var count in ransomCounter) {
		if (magazineCounter[count] < ransomCounter[count]) {
			return 'No';
		}
	}
	return 'Yes';
}

// console.log(ransomNote('give me one grand today night', 'give one grand today')); // Yes
// console.log(ransomNote('I will shoot that vase', 'I will shoot that vase and then shoot your garden gnome')); // No
// console.log(ransomNote('let us get crunk tonight', 'crunk get crunk')); // No
// console.log(ransomNote('let us get crunk tonight', 'get crunk')); // Yes

/*
function counter(a) {
      var A = {};
       for (var i=0; i< a.length; i++) {
         (A[a[i]]) ? A[a[i]] += 1 : A[a[i]] = 1;
       }
      return A;
    }
    
    // Main function 
    magCounter = counter(magazine);
    ransomCounter = counter(ransom);
    for (var i in ransomCounter) {
        if (magCounter[i] < ransomCounter[i]) {
            console.log('No');
            return;
        }
    }
    console.log('Yes');
 */

/*
Left Rotation - Array
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

Sample Input
[1, 2, 3, 4, 5], 4

Sample Output
[5, 1, 2, 3, 4]

Note: Because the constraints state that rotations < length, we need not concern ourselves with shifting > n units! :D
 */
var leftRotation = (array, rotations) => {
	var index = (rotations >= array.lenth) ? (array.length % rotations) : rotations;
	return array.slice(index).concat(array.slice(0, index));
	// if (rotations >= array.length) {
	// 	return array;
	// }
	// for (var i = 0; i < rotations; i++) {
	// 	array.push(array.shift());
	// }
	// return array;
}
// Tests
// console.log(leftRotation([1, 2, 3, 4, 5], 4)) // -> [5, 1, 2, 3, 4]
// console.log(leftRotation([1, 2, 3, 4, 5], 3)) // -> [4, 5, 1, 2, 3]
// console.log(leftRotation([1, 2, 3, 4, 5], 7)) // -> [1, 2, 3, 4, 5]

/*
Making Anagrams - String
Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

Sample Input
'cde'
'abc'
Sample Output
4
 */
var makingAnagrams = (str1, str2) => {
	// var toRemove = 0; 

 //  var ht = {}; 

 //  for(var i = 0; i < str1.length; i++){
 //      var ch = str1[i]; 
 //      !ht[ch] ? ht[ch] = [1,0] : ht[ch][0]++;  
 //  }

 //  for(var i = 0; i < str2.length; i++){
 //      var ch = str2[i]; 
 //      !ht[ch] ? ht[ch] = [0,1] : ht[ch][1]++;  
 //  }
 //  // console.log(ht);
 //  for(var key in ht){
 //      toRemove += Math.abs(ht[key][0] - ht[key][1]); 
 //  }
 //  return toRemove;
	var wordObj = {};
	var toRemove = 0;
	for (var i = 0; i < str1.length; i++) {
		wordObj[str1[i]] ? wordObj[str1[i]] = wordObj[str1[i]] + 1 : wordObj[str1[i]] = 1 ;
	}
	for (var i = 0; i < str2.length; i++) {
		wordObj[str2[i]] ? wordObj[str2[i]] = wordObj[str2[i]] - 1 : wordObj[str2[i]] = -1;
	}
	for (var key in wordObj) {
		toRemove += Math.abs(wordObj[key])
	}
	return toRemove;
}

// Tests
// console.log(makingAnagrams('cde', 'abc')); // 4
// console.log(makingAnagrams('hell', 'hello')); // 1
// console.log(makingAnagrams('isaac', 'issac')); // 2
// console.log(makingAnagrams('isabel', 'isabelle')); // 2
// console.log(makingAnagrams('lorena', 'lorenzo')); // 3
// console.log(makingAnagrams('zohar', 'zohan')); // 2
// console.log(makingAnagrams('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')); // 104
