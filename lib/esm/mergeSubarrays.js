export default function mergeSubarrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = arr.slice(startRight, stopRight);
    var leftArr = arr.slice(startLeft, stopLeft);
    var leftPointer = 0;
    var rightPointer = 0;
    rightArr[rightArr.length] = Infinity;
    leftArr[leftArr.length] = Infinity;
    for (var arrPointer = startLeft; arrPointer < stopRight; arrPointer++) {
        if (leftArr[leftPointer] <= rightArr[rightPointer]) {
            arr[arrPointer] = leftArr[leftPointer];
            leftPointer++;
        }
        else {
            arr[arrPointer] = rightArr[rightPointer];
            rightPointer++;
        }
    }
}
