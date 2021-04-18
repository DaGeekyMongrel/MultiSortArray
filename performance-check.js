const SortableArray = require("./SortableArray");
const { performance } = require("perf_hooks");

const test = new SortableArray(10000);

test.fillWithRandom();

// Bubble Sort
let start = performance.now();
test.bubbleSort();
console.log("Bubble: ", performance.now() - start + "ms");

test.fillWithRandom();

// Selection Sort
start = performance.now();
test.selectionSort();
console.log("Selection: ", performance.now() - start + "ms");

test.fillWithRandom();

// Insertion Sort
start = performance.now();
test.insertionSort();
console.log("Insertion: ", performance.now() - start + "ms");

test.fillWithRandom();

// Shell Sort
start = performance.now();
test.shellSort();
console.log("Shell: ", performance.now() - start + "ms");

test.fillWithRandom();

// Merge Sort
start = performance.now();
test.mergeSort();
console.log("Merge: ", performance.now() - start + "ms");

test.fillWithRandom();

// Quick Sort
start = performance.now();
test.quickSort();
console.log("Quick: ", performance.now() - start + "ms");
