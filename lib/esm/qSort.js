export default function qSort(arr) {
    if (arr.length === 0)
        return [];
    var lesser = [];
    var greater = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            lesser.push(arr[i]);
        }
        else {
            greater.push(arr[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}
