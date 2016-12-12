/*
Imagine you landed a new job as a cashier...
Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.

Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make amount of money with coins of the available denominations.

Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

O(n*m) time and O(n) additional space, where n is the amount of money and m is the number of potential denominations.
 */

var makeChange = (amt, denominations) => {
	let results = [];

	for (let i = 0; i <= amt; i++) {
		results[i] = 0;
	}

	results[0] = 1;

	for (let i = 0; i < denominations.length; i++) {
		let coin = denominations[i];
		for (let j = coin; j <= amt; j++) {
			let highestAmtRemainder = j - coin;
			results[j] += results[highestAmtRemainder];
		}
	}

	return results[amt];
}

console.assert(makeChange(4, [1, 2, 3]) === 4, 'Should equal 4');