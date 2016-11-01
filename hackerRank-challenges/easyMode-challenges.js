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
	var diff = 0;
	for (var i = 0; i < n; i++) {
		diff = diff + matrix[i][i] - matrix[i][(n - 1) - i]
	}
	return Math.abs(diff);
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
console.log(ransomNote('let us get crunk tonight', 'crunk get crunk')); // No
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