/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

1. insert()—records a new temperature
2. getMax()—returns the highest temp we've seen so far
3. getMin()—returns the lowest temp we've seen so far
4. getMean()—returns the mean (sum of all values / number of values) of all temps we've seen so far
5. getMode()—returns a mode (a number that appears most times) of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0...110.

If there is more than one mode, return any of the modes.
 */
'use strict';

class TempTracker {
	constructor () {
		this.maxTemp = null;
		this.minTemp = null;

		// For Mean
		this.totalSum = 0;
		this.totalNumbers = null;
		this.mean = null;

		// For Mode
		this.modeCount = 0;
		this.mode = null;

		// Range 0 - 110
		this.temperatures = [];
		for (let i = 0; i <= 110; i++) {
			this.temperatures[i] = 0;
		}
	}

	insert(temp) {
		// Mean
		this.totalNumbers++;
		this.totalSum += temp;
		this.mean = Math.floor(this.totalSum / this.totalNumbers);

		// Mode
		this.temperatures[temp]++;
		if (this.temperatures[temp] > this.modeCount) {
			this.modeCount = this.temperatures[temp];
			this.mode = temp;
		}

		// Max & Min
		if (this.maxTemp === null || temp > this.maxTemp) {
			this.maxTemp = temp;
		} else if (this.minTemp === null || temp < this.minTemp) {
			this.minTemp = temp;
		}
	}

	getMax() {
		return this.maxTemp;
	}

	getMin() {
		return this.minTemp;
	}

	getMean() {
		return this.mean;
	}

	getMode() {
		return this.mode;
	}
}

let temp = new TempTracker();
// Range = 0 ... 110
temp.insert(45);
temp.insert(75);
temp.insert(39);
temp.insert(45);
temp.insert(67);
temp.insert(75);
temp.insert(57);