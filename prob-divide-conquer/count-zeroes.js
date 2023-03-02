function countZeroes(arr) {
	let firstZero = findFirst(arr);
	// returns index of first 0
    if (firstZero === -1) return 0;
    
    return arr.length - firstZero
}

function firstZero(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    
    if (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (middleIdx === 0 || arr[middleIdx-1] === 0 && arr[middleIdx] === 0) {
            return middleIdx
        } else if (arr[middleIdx] === 1) {
            return firstZero(arr, middleIdx+1, right)
        } return firstZero(arr, leftIdx ,middleIdx-1)
    } return -1
}

module.exports = countZeroes;
