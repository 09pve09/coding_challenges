/*
Sort Characters By Frequency

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 */

var frequencySort = function(s) {
	let ht = {};
	let bucket = {};
	let results = [];
	let set = new Set();

	for (let i = 0; i <= s.length - 1; i++) {
		let curr = s[i];
		set.add(curr);
		if (!ht[curr]) {
			ht[curr] = 1;
		} else if (ht[curr] && s[i - 1] === curr) {
			ht[curr]++;
		}
	}

	let length = 0;
	for (let letters in ht) {
		length += ht[letters];
	}
	if (length !== s.length) {
		return 'String error';
	}

	for (let val of set) {
		let freq = ht[val];
		if (!bucket[freq]) {
			bucket[freq] = [];
		}
		bucket[freq].push(new Array(freq + 1).join(val));
	}

	for (var i = s.length; i > 0; i--) {
		if (bucket[i]) {
			// results.push(...bucket[i]);
			results = results.concat(bucket[i]);
		}
	}
	return results.join('');
};


/*
// Accepted answer on leetcode
var frequencySort = function(s) {
    let set = new Set();
    let ht = {};
    let bucket = {};
    let results = [];
    
    for (let i = s.length - 1; i >= 0; i--) {
        let curr = s[i];
        set.add(curr);
        if (!ht[curr]) {
            ht[curr] = 1;
        } else if (ht[curr]) {
            ht[curr]++;
        }
    }
    
    for (let char of set) {
        let freq = ht[char];
        if (!bucket[freq]) {
            bucket[freq] = [];
        }
        bucket[freq].push(new Array(freq + 1).join(char));
    }
    
    for (let i = s.length; i > 0; i--) {
        if (bucket[i]) {
            results = results.concat(bucket[i]);
        }
    }
    
    return results.join('');
};
 */

console.log(frequencySort('tree'));
console.log(frequencySort('Aabb'));
console.log(frequencySort('cccaaa'));
console.log(frequencySort('cacaca'));
