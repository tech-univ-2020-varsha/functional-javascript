function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE

    return function recurringFunc(index, itemArray) {
        if (index > arr.length - 1)
            return itemArray;
        else
            return recurringFunc(index + 1, fn(itemArray, arr[index], index, arr));
    }(0, initial);
}

module.exports = reduce