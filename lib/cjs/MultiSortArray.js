"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSortArray = void 0;
var mergeSubarrays_1 = __importDefault(require("./mergeSubarrays"));
var qSort_1 = __importDefault(require("./qSort"));
var MultiSortArray = /** @class */ (function () {
    function MultiSortArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.defaultGaps = [1, 4, 10, 23, 57, 132, 301, 701]; // Marcin Cuira
        this.items = new (Array.bind.apply(Array, __spreadArray([void 0], args)))();
    }
    MultiSortArray.prototype.fillWithRandom = function (length) {
        if (length === void 0) { length = this.items.length; }
        for (var i = 0; i < length; i++) {
            this.items[i] = Math.floor(Math.random() * (length + 1));
        }
    };
    MultiSortArray.prototype.swapItems = function (index1, index2) {
        var temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    };
    MultiSortArray.prototype.sort = function () {
        this.items.sort(function (a, b) { return a - b; });
    };
    MultiSortArray.prototype.bubbleSort = function () {
        for (var i = this.items.length - 1; i >= 1; i--) {
            for (var j = 0; j <= i; j++) {
                if (this.items[j] > this.items[j + 1]) {
                    this.swapItems(j, j + 1);
                }
            }
        }
    };
    MultiSortArray.prototype.selectionSort = function () {
        var min;
        for (var i = 0; i <= this.items.length - 2; i++) {
            min = i;
            for (var j = i + 1; j <= this.items.length - 1; j++) {
                if (this.items[j] < this.items[min])
                    min = j;
            }
            this.swapItems(i, min);
        }
    };
    MultiSortArray.prototype.insertionSort = function () {
        var temp, j;
        for (var i = 1; i <= this.items.length - 1; i++) {
            temp = this.items[i];
            j = i;
            while (j > 0 && this.items[j - 1] > temp) {
                this.items[j] = this.items[j - 1];
                j--;
            }
            this.items[j] = temp;
        }
    };
    MultiSortArray.prototype.shellSort = function (gaps) {
        if (gaps === void 0) { gaps = this.defaultGaps; }
        for (var g = 0; g < gaps.length; g++) {
            for (var i = gaps[g]; i < this.items.length; i++) {
                var temp = this.items[i];
                var j = void 0;
                for (j = i; j >= gaps[g] && this.items[j - gaps[g]] > temp; j -= gaps[g]) {
                    this.items[j] = this.items[j - gaps[g]];
                }
                this.items[j] = temp;
            }
        }
    };
    MultiSortArray.prototype.mergeSort = function () {
        if (this.items.length < 2)
            return;
        var step = 1;
        var left, right;
        while (step < this.items.length) {
            left = 0;
            right = step;
            while (right + step <= this.items.length) {
                mergeSubarrays_1.default(this.items, left, left + step, right, right + step);
                left = right + step;
                right = left + step;
            }
            if (right < this.items.length) {
                mergeSubarrays_1.default(this.items, left, left + step, right, this.items.length);
            }
            step *= 2;
        }
    };
    MultiSortArray.prototype.quickSort = function () {
        var _a;
        var sorted = qSort_1.default(this.items);
        this.items.length = 0;
        (_a = this.items).push.apply(_a, sorted);
    };
    MultiSortArray.prototype.toString = function () {
        return this.items.toString();
    };
    return MultiSortArray;
}());
exports.MultiSortArray = MultiSortArray;
