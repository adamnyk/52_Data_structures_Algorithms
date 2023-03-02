function findFloor(arr, num, low = 0, high = arr.length - 1) {
	if (arr[0] > num || low > high) return -1;

	if (arr[high] <= num) return arr[high];

	let mid = Math.floor((low + high) / 2);

	if (arr[mid] <= num && arr[mid + 1] > num) return arr[mid];
	if (arr[mid] > num) {
		return findFloor(arr, num, low, mid - 1);
	}
	return findFloor(arr, num, mid + 1, high);
}

// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array.
// The floor of x in an array is the largest element in the array which is smaller than or equal to x.If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1

module.exports = findFloor;
