export declare class MultiSortArray {
    constructor(...args: any);
    items: Array<any>;
    defaultGaps: number[];
    fillWithRandom(length?: number): void;
    swapItems(index1: number, index2: number): void;
    sort(...args: any): void;
    bubbleSort(): void;
    selectionSort(): void;
    insertionSort(): void;
    shellSort(gaps?: number[]): void;
    mergeSort(): void;
    quickSort(): void;
    toString(): string;
}
