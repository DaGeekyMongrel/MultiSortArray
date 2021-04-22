const { expect } = require('chai');
const { MultiSortArray } = require('..');

describe('MultiSortArray', () => {
  describe('Fill with random numbers', () => {
    it('when no length is specified, fills up to the current length', () => {
      const testArr = new MultiSortArray(100);
      testArr.fillWithRandom();
      expect(testArr.items.length).to.equal(100);
      expect(testArr.items.indexOf(undefined)).to.equal(-1);
    });

    it('when length is specified, creates new items if necessary', () => {
      const testArr = new MultiSortArray(100);
      testArr.fillWithRandom(1000);
      expect(testArr.items.length).to.equal(1000);
      expect(testArr.items.indexOf(undefined)).to.equal(-1);
    });
  });

  describe('Swap two items', () => {
    it('swaps two items in place given by indices', () => {
      const testArr = new MultiSortArray(1, 2);
      testArr.swapItems(0, 1);
      expect(testArr.items).to.eql([2, 1]);
    });
  });

  describe('Sort', () => {
    const testArr = new MultiSortArray(100);
    const compareFunc = (a, b) => a - b;
    let sorted = [];

    beforeEach(() => {
      testArr.fillWithRandom();
      sorted = [...testArr.items].sort(compareFunc);
    });

    it('Bubble sort', () => {
      testArr.bubbleSort();
      expect(testArr.items).to.eql(sorted);
    });

    it('Selection sort', () => {
      testArr.selectionSort();
      expect(testArr.items).to.eql(sorted);
    });

    it('Insertion sort', () => {
      testArr.insertionSort();
      expect(testArr.items).to.eql(sorted);
    });

    it('Shell sort', () => {
      testArr.shellSort();
      expect(testArr.items).to.eql(sorted);
    });

    it('Merge sort', () => {
      testArr.mergeSort();
      expect(testArr.items).to.eql(sorted);
    });

    it('Quick sort', () => {
      testArr.quickSort();
      expect(testArr.items).to.eql(sorted);
    });
  });
});
