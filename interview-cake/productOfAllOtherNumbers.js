/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:
[1, 7, 3, 4]

your function would return:
[84, 12, 28, 21]

by calculating:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

Create your best solution.  Might require multiple iterations. Use a greedy algorithm!
FYI: A greedy algorithm iterates through the problem space taking the optimal solution "so far," until it reaches the end.

The greedy approach is only optimal if the problem has "optimal substructure," which means stitching together optimal solutions to subproblems yields an optimal solution.

Final Solution - time: O(n) | space: O(n)
 */

var getProduct = (array, currIndex) => {
	let product = 1;
	for (let i = 0; i < array.length; i++) {
		if (i !== currIndex) {
			product *= array[i];
		}
	}
	return product;
}

// Tests
// console.assert(getProduct([1, 7, 3, 4], 0) === 84, 'Should equal 84');
// console.assert(getProduct([1, 7, 3, 4], 1) === 12, 'Should equal 12');
// console.assert(getProduct([1, 7, 3, 4], 2) === 28, 'Should equal 28');
// console.assert(getProduct([1, 7, 3, 4], 3) === 21, 'Should equal 21');

// var productsOfAllIntsAfterIndex = (array) => {
// 	let arrayCopy = array.slice(); // Or a results array?
// 	for (let i = 0; i < array.length; i++) {
// 		let product = getProduct(arrayCopy, i);
// 		array[i] = product;
// 	}
// 	return array;
// }

var productsOfAllIntsAfterIndex = array => {
	let results = [], product = 1;

	for (let i = 0; i < array.length; i++) {
		results[i] = product; // 1, 3, 6, 36
		product = product * array[i]; // 3, 6
	}

	// Reset product
	product = 1;

	// Our last index is correct, so we need to iterate backwards to get the product of rest
	for (let i = array.length - 1; i >= 0; i--) {
		results[i] = product * results[i]; // 36, 6, 18, 12
		product *= array[i]; // 1, 6, 12
	}

	return results;
}

// Tests
console.log('Should equal [84, 12, 28, 21] ===', productsOfAllIntsAfterIndex([1, 7, 3, 4]));
console.log('Should equal [12, 18, 6, 36] ===', productsOfAllIntsAfterIndex([3, 2, 6, 1]));
console.log('Should equal [135, 180, 108, 60] ===', productsOfAllIntsAfterIndex([4, 3, 5, 9]));


// helper func for array equality 
const areArraysEqual = (array1, array2) => {
  var areEqual = true;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false;
    }
  }
  return areEqual && array1.length === array2.length;
};

// Test
// console.assert(areArraysEqual(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]), [84, 12, 28, 21]) === true, 'should equal true');


/*
Breakdown
A brute force approach would use two loops to multiply the integer at every index by the integer at every nestedIndex, unless index === nestedIndex.

This would give us a runtime of O(n^2). Can we do better?

Well, we’re wasting a lot of time doing the same calculations. As an example, let's take:
// input array
[1, 2, 6, 5, 9]

// array of the products of all integers
// except the integer at each index:

[540, 270, 90, 108, 60] // [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5]

We're doing some of the same multiplications two or three times!
[2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5]

Or look at this pattern:
[2*6*5*9, _1_*6*5*9, _1*2_*5*9, _1*2*6_*9, _1*2*6*5_]

We’re redoing multiplications when instead we could be storing the results! This would be a great time to use a greedy ↴ approach. We could store the results of each multiplication highlighted in blue, then just multiply by one new integer each time.

So in the last highlighted multiplication, for example, we wouldn’t have to multiply 1*2*6 again. If we stored that value (12) from the previous multiplication, we could just multiply 12*5.

Can we break our problem down into subproblems so we can use a greedy approach?

Let's look back at the last example:
[2*6*5*9, _1_*6*5*9, _1*2_*5*9, _1*2*6_*9, _1*2*6*5_]

What do all the highlighted multiplications have in common?

They are all the integers that are before each index in the input array ([1, 2, 6, 5, 9]). For example, the highlighted multiplication at index 3 (1*2*6) is all the integers before index 3 in the input array.

[1, 2, 6, _5_, 9]

[2*6*5*9, _1_*6*5*9, _1*2_*5*9, _1*2*6_*9, _1*2*6*5_]

Do all the multiplications that aren't highlighted have anything in common?

Yes, they're all the integers that are after each index in the input array!

Knowing this, can we break down our original problem to use a greedy approach?

The product of all the integers except the integer at each index can be broken down into:

1. the product of all the integers before each index
2. the product of all the integers after each index.

To start, let's just get the product of all the integers before each index.

How can we do this? Let's take another example:

  // input array
[3, 1, 2, 5, 6, 4]

// multiplication of all integers before each index
// (we give index 0 a value of 1 since it has no integers before it)
[1, 3, 3*1, 3*1*2, 3*1*2*5, 3*1*2*5*6]

// final array of the products of all the integers before each index
[1, 3, 3, 6, 30, 180]

Notice that we're always adding one new integer to our multiplication for each index!

So to get the products of all the integers before each index, we could greedily store each product so far and multiply that by the next integer. Then we can store that new product so far and keep going.

So how can we apply this to our input array?

Let’s make an array productsOfAllIntsBeforeIndex:

var productsOfAllIntsBeforeIndex = [];

// for each integer, find the product of all the integers
// before it, storing the total product so far each time
var productSoFar = 1;
for (var i = 0; i < intArray.length; i++) {
    productsOfAllIntsBeforeIndex[i] = productSoFar;
    productSoFar *= intArray[i];
}

So we solved the subproblem of finding the products of all the integers before each index. Now, how can we find the products of all the integers after each index?

It might be tempting to make a new array of all the values in our input array in reverse, and just use the same function we used to find the products before each index.

Is this the best way?

This method will work, but:

1. _We'll need to make a whole new array_ that's basically the same as our input array. That's another O(n) memory cost!
2. To keep our indices aligned with the original input array, _we'd have to reverse the array of products we return_. That's two reversals, or two O(n) operations!

Is there a cleaner way to get the products of all the integers after each index?

We can just walk through our array backwards! So instead of reversing the values of the array, we'll just reverse the indices we use to iterate!

  var productsOfAllIntsAfterIndex = [];

var productSoFar = 1;
for (var i = intArray.length - 1; i >= 0; i--) {
    productsOfAllIntsAfterIndex[i] = productSoFar;
    productSoFar *= intArray[i];
}

Now we've got productsOfAllIntsAfterIndex, but we’re starting to build a lot of new arrays. And we still need our final array of the total products. How can we save space?

Let’s take a step back. Right now we’ll need three arrays:
1. productsOfAllIntsBeforeIndex
2. productsOfAllIntsAfterIndex
3. productsOfAllIntsExceptAtIndex

To get the first one, we keep track the total product so far going forwards, and to get the second one, we keep track of the total product so far going backwards. How do we get the third one?



 */