class SortableArray {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.gaps = [5, 3, 1];
  }

  insert(element) {
    this.dataStore[this.pos++] = element;
  }

  toString() {
    let retstr = "";
    for (let i = 0; i < this.numElements; i++) {
      retstr += this.dataStore[i] + "\t";
      if (i + 1 > 1 && (i + 1) % 10 === 0) {
        retstr += "\n";
      }
    }
    return retstr;
  }

  clear() {
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = 0;
    }
  }

  fillWithRandom() {
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  }

  setGaps(arr) {
    this.gaps = arr;
  }

  swap(index1, index2) {
    let temp = this.dataStore[index1];
    this.dataStore[index1] = this.dataStore[index2];
    this.dataStore[index2] = temp;
  }

  bubbleSort() {
    for (let outer = this.numElements - 1; outer >= 1; outer--) {
      for (let inner = 0; inner <= outer; inner++) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          this.swap(inner, inner + 1);
        }
      }
    }
  }

  selectionSort() {
    let min;
    for (let outer = 0; outer <= this.numElements - 2; outer++) {
      min = outer;
      for (let inner = outer + 1; inner <= this.numElements - 1; inner++) {
        if (this.dataStore[inner] < this.dataStore[min]) min = inner;
      }
      this.swap(outer, min);
    }
  }

  insertionSort() {
    let temp, inner;
    for (let outer = 1; outer <= this.numElements - 1; outer++) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && this.dataStore[inner - 1] > temp) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        inner--;
      }
      this.dataStore[inner] = temp;
    }
  }

  shellSort() {
    for (let g = 0; g < this.gaps.length; g++) {
      for (let i = this.gaps[g]; i < this.dataStore.length; i++) {
        let temp = this.dataStore[i];
        let j;
        for (
          j = i;
          j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
          j -= this.gaps[g]
        ) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
      }
    }
  }

  mergeSort() {
    if (this.numElements < 2) return;
    let step = 1;
    let left, right;
    while (step < this.numElements) {
      left = 0;
      right = step;
      while (right + step <= this.numElements) {
        this.mergeArrays(left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      if (right < this.numElements) {
        this.mergeArrays(left, left + step, right, this.numElements);
      }
      step *= 2;
    }
  }

  mergeArrays(startLeft, stopLeft, startRight, stopRight) {
    let rightArr = this.dataStore.slice(startRight, stopRight);
    let leftArr = this.dataStore.slice(startLeft, stopLeft);
    let leftPointer = 0;
    let rightPointer = 0;
    rightArr[rightArr.length] = Infinity;
    leftArr[leftArr.length] = Infinity;
    for (let arrPointer = startLeft; arrPointer < stopRight; arrPointer++) {
      if (leftArr[leftPointer] <= rightArr[rightPointer]) {
        this.dataStore[arrPointer] = leftArr[leftPointer];
        leftPointer++;
      } else {
        this.dataStore[arrPointer] = rightArr[rightPointer];
        rightPointer++;
      }
    }
  }

  static qSort(arr) {
    if (arr.length === 0) return [];
    let lesser = [];
    let greater = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lesser.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
    return SortableArray.qSort(lesser).concat(
      pivot,
      SortableArray.qSort(greater)
    );
  }

  quickSort() {
    this.dataStore = SortableArray.qSort(this.dataStore);
  }
}

module.exports = SortableArray;
