const countWords = require('./reduce.js');

describe('The function to count the number of times each string occured in an array', () => {
    it('should return the object', () => {
        let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
        const wordCount = countWords(inputWords);
        expect(wordCount).toBeInstanceOf(Object);
    });
    it('should return the number of objects equal to distinct elements in the array', () => {
        let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
        let inputSet = [...new Set(inputWords)];
        const wordCount = countWords(inputWords);
        expect(inputSet.length).toBe(Object.keys(wordCount).length);
    })
    it('should contain valid key-value pair', () => {
        let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
        const wordCount = countWords(inputWords);
        let outputObj = JSON.stringify({
            Apple: 2,
            Banana: 1,
            Durian: 3
        });
        expect(JSON.stringify(wordCount)).toEqual(outputObj);
    });
})