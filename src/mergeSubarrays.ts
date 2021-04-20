export default function mergeSubarrays(
  arr: Array<number>,
  startLeft: number,
  stopLeft: number,
  startRight: number,
  stopRight: number
) {
  let rightArr = arr.slice(startRight, stopRight);
  let leftArr = arr.slice(startLeft, stopLeft);
  let leftPointer = 0;
  let rightPointer = 0;

  rightArr[rightArr.length] = Infinity;
  leftArr[leftArr.length] = Infinity;

  for (let arrPointer = startLeft; arrPointer < stopRight; arrPointer++) {
    if (leftArr[leftPointer] <= rightArr[rightPointer]) {
      arr[arrPointer] = leftArr[leftPointer];
      leftPointer++;
    } else {
      arr[arrPointer] = rightArr[rightPointer];
      rightPointer++;
    }
  }
}
