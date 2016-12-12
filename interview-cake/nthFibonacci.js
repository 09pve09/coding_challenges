/*
Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:
fib(0); // => 0
fib(1); // => 1
fib(2); // => 1
fib(3); // => 2
fib(4); // => 3
...
 */

// Use memoization! :) And bottom-up!

// var nthFib = num => {
// 	let results = [0, 1];
// 	let start = 0;

// 	if (num === 0 || num === 1) {
// 		return results[num];
// 	}

// 	while (start <= (num - 2)) {
// 		results.push((results[results.length - 1]) + (results.length - 2));
// 		start+=1;
// 	}
// 	return results[results.length - 1];
// };

var nthFib = num => {
	if (num === 0 || num === 1) {
		return num;
	}
	if (num < 0) {
		return 'Cannot compute a negative fibonacci.';
	}

	let prevPrev = 0;
	let prev = 1;
	let curr;

	for (let i = 1; i < num; i++) {
		curr = prevPrev + prev;
		prevPrev = prev;
		prev = curr;
	}
	
	return curr;
}

console.log(nthFib(3))
