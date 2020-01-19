const countWords = (inputWord) => {
    return inputWord.reduce((countArray, word) => {
        countArray[word] = (countArray[word] + 1) || 1;
        return countArray;
    }, {});
}

module.exports = countWords;