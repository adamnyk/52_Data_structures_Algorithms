// not working

function findRotatedIndex(arr, num) {
	pivot = findRotationCount(arr)  ;

    if (pivot > 0) return binarySearch(arr, num, 0, pivot-1)
    if (pivot == 0) return binarySearch(arr, num, 0, arr.length-1)

	function binarySearch(arr, num, start, end) {
		if (arr.length === 0) return -1;
		if (num < arr[start] || num > arr[end]) return -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === num) {
              return mid;
            } else if (num < arr[mid]) {
              end = mid - 1;
            } else {
              start = mid + 1;
            }
          }
          return -1;
	}

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
}

module.exports = findRotatedIndex;
