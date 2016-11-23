/*
Suppose we could access yesterday's stock prices as an array, where:
- The indicies are the time in minutes past trade opening time, which was 9:30am local time
- The value is the price in dollars of Apple stock at the time

So if the stock cost $500 at 10:30am, stockPriceYesterday(60) = 500;

Write an efficient algorithm that takes the stockPricesYesterday and returns the BEST profit I could have made from 1 purchase and 1 sale of Apple stock yesterday.

For example: 
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday); // 6 (buying for $5 and selling for $11)
 */

var getMaxProfit = stocks => {
	let minPurchase = stocks[0];
	let maxProfit = stocks[1] - stocks[0];
	for (let i = 1; i < stocks.length; i++) {
		if (stocks[i] - minPurchase > maxProfit) {
			maxProfit = stocks[i] - minPurchase;
		}
		if (minPurchase > stocks[i]) {
			minPurchase = stocks[i];
		}
	// 	maxProfit = Math.max((stocks[i] - minPurchase), maxProfit);
	// 	minPurchase = Math.min(minPurchase, stocks[i]);
	}
	return maxProfit;
}

// let stocks = [10, 7, 5, 8, 11, 9];
// console.log(getMaxProfit([4, 11, 5, 2, 15, 1]), 'Should equal 13');
// console.log(getMaxProfit([4, 1, 5, 2, 11, 15]), 'Should equal 14');
console.log(getMaxProfit([10, 7, 5, 8, 11, 9]), 'should equal 6');
// console.log(getMaxProfit([10, 9, 8, 7, 6, 5]), 'should equal -1');