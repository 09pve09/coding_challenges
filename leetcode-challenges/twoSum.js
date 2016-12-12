/*
Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

// var twoSum = (array, target) => {
// 	let ht = {};
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] in ht) {
// 			return [ht[array[i]], i];
// 		}
// 		ht[target - array[i]] = i;
// 	}
// 	return null;
// };

var twoSum = (array, target) => {
	let ht = {};
	for (let i = 0; i < array.length; i++) {
		let diff = target - array[i];
		if (diff in ht) {
			return [ht[diff], i];
		}
		ht[array[i]] = i;
	}
	return null;
};

console.log(twoSum([2, 11, 15, 7], 9));