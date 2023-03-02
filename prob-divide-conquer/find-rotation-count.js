function findRotationCount(arr, low = 0, high = arr.length - 1) {
	if (low > high) return 0;
	if (low === high) return low;
	let mid = Math.floor((low + high) / 2);


    if (mid >= low && arr[mid] < arr[mid - 1]) {
        return mid;
      }

	//Decide to search left or right side
	if (arr[mid] < arr[high]) {
		return findRotationCount(arr, low, mid - 1);
	}

	return findRotationCount(arr, mid + 1, high);
}

module.exports = findRotationCount;
