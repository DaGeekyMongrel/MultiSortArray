"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MultiSortArray = void 0;
var mergeSubarrays_1 = require("./mergeSubarrays");
var qSort_1 = require("./qSort");
var MultiSortArray = /** @class */ (function (_super) {
    __extends(MultiSortArray, _super);
    function MultiSortArray() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultGaps = [1, 4, 10, 23, 57, 132, 301, 701]; // Marcin Cuira
        return _this;
    }
    MultiSortArray.prototype.fillWithRandom = function () {
        for (var i = 0; i < this.length; i++) {
            this[i] = Math.floor(Math.random() * (this.length + 1));
        }
    };
    MultiSortArray.prototype.swapItems = function (index1, index2) {
        var temp = this[index1];
        this[index1] = this[index2];
        this[index2] = temp;
    };
    MultiSortArray.prototype.bubbleSort = function () {
        for (var i = this.length - 1; i >= 1; i--) {
            for (var j = 0; j <= i; j++) {
                if (this[j] > this[j + 1]) {
                    this.swapItems(j, j + 1);
                }
            }
        }
    };
    MultiSortArray.prototype.selectionSort = function () {
        var min;
        for (var i = 0; i <= this.length - 2; i++) {
            min = i;
            for (var j = i + 1; j <= this.length - 1; j++) {
                if (this[j] < this[min])
                    min = j;
            }
            this.swapItems(i, min);
        }
    };
    MultiSortArray.prototype.insertionSort = function () {
        var temp, j;
        for (var i = 1; i <= this.length - 1; i++) {
            temp = this[i];
            j = i;
            while (j > 0 && this[j - 1] > temp) {
                this[j] = this[j - 1];
                j--;
            }
            this[j] = temp;
        }
    };
    MultiSortArray.prototype.shellSort = function (gaps) {
        if (gaps === void 0) { gaps = this.defaultGaps; }
        for (var g = 0; g < gaps.length; g++) {
            for (var i = gaps[g]; i < this.length; i++) {
                var temp = this[i];
                var j = void 0;
                for (j = i; j >= gaps[g] && this[j - gaps[g]] > temp; j -= gaps[g]) {
                    this[j] = this[j - gaps[g]];
                }
                this[j] = temp;
            }
        }
    };
    MultiSortArray.prototype.mergeSort = function () {
        if (this.length < 2)
            return;
        var step = 1;
        var left, right;
        while (step < this.length) {
            left = 0;
            right = step;
            while (right + step <= this.length) {
                mergeSubarrays_1["default"](this, left, left + step, right, right + step);
                left = right + step;
                right = left + step;
            }
            if (right < this.length) {
                mergeSubarrays_1["default"](this, left, left + step, right, this.length);
            }
            step *= 2;
        }
    };
    MultiSortArray.prototype.quickSort = function () {
        var sorted = qSort_1["default"](this);
        this.length = 0;
        this.push.apply(this, sorted);
    };
    return MultiSortArray;
}(Array));
exports.MultiSortArray = MultiSortArray;
