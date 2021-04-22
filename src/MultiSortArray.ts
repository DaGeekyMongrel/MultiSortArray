import mergeSubarrays from './mergeSubarrays';
import qSort from './qSort';

export class MultiSortArray {
  constructor(...args: any) {
    this.items = new Array(...args);
  }

  items: Array<any>;

  defaultGaps = [1, 4, 10, 23, 57, 132, 301, 701]; // Marcin Cuira

  fillWithRandom(length: number = this.items.length) {
    for (let i = 0; i < length; i++) {
      this.items[i] = Math.floor(Math.random() * (length + 1));
    }
  }

  swapItems(index1: number, index2: number) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  sort() {
    this.items.sort((a, b) => a - b);
  }

  bubbleSort() {
    for (let i = this.items.length - 1; i >= 1; i--) {
      for (let j = 0; j <= i; j++) {
        if (this.items[j] > this.items[j + 1]) {
          this.swapItems(j, j + 1);
        }
      }
    }
  }

  selectionSort() {
    let min: number;
    for (let i = 0; i <= this.items.length - 2; i++) {
      min = i;
      for (let j = i + 1; j <= this.items.length - 1; j++) {
        if (this.items[j] < this.items[min]) min = j;
      }
      this.swapItems(i, min);
    }
  }

  insertionSort() {
    let temp: number, j: number;
    for (let i = 1; i <= this.items.length - 1; i++) {
      temp = this.items[i];
      j = i;
      while (j > 0 && this.items[j - 1] > temp) {
        this.items[j] = this.items[j - 1];
        j--;
      }
      this.items[j] = temp;
    }
  }

  shellSort(gaps = this.defaultGaps) {
    for (let g = 0; g < gaps.length; g++) {
      for (let i = gaps[g]; i < this.items.length; i++) {
        let temp = this.items[i];
        let j: number;

        for (
          j = i;
          j >= gaps[g] && this.items[j - gaps[g]] > temp;
          j -= gaps[g]
        ) {
          this.items[j] = this.items[j - gaps[g]];
        }
        this.items[j] = temp;
      }
    }
  }

  mergeSort() {
    if (this.items.length < 2) return;
    let step = 1;
    let left, right;
    while (step < this.items.length) {
      left = 0;
      right = step;
      while (right + step <= this.items.length) {
        mergeSubarrays(this.items, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      if (right < this.items.length) {
        mergeSubarrays(this.items, left, left + step, right, this.items.length);
      }
      step *= 2;
    }
  }

  quickSort() {
    const sorted = qSort(this.items);
    this.items.length = 0;
    this.items.push(...sorted);
  }

  toString() {
    return this.items.toString();
  }
}
