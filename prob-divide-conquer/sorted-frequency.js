function sortedFrequency(arr, num) {
	first = findFirst(arr, num);
	last = findLast(arr, num);

	if (first == -1) return 0;
	return last - first + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
	if (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (mid === 0 || (num > arr[mid - 1] && arr[mid] === num)) {
			return mid;
		} else if (num > arr[mid]) {
			return findFirst(arr, num, mid + 1, high);
		} else {
			return findFirst(arr, num, low, mid - 1);
		}
	}
	return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
	if (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (mid === arr.length - 1 || (num < arr[mid + 1] && arr[mid] === num)) {
			return mid;
		} else if (num < arr[mid]) {
			return findLast(arr, num, low, mid - 1);
		} else {
			/// else if num > arr[mid] or num === arr[mid] but not the last
			return findLast(arr, num, mid + 1, high);
		}
	}
	return -1;
}

module.exports = sortedFrequency;

// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
