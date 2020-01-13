const countWords = require('./countWords');

describe('The function to count the number of times each string is occured in an array', () => {
    it('should return the object', () => {
        let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
        const wordCount = countWords(inputWords);
        expect(wordCount).toBeInstanceOf(Object);
    });
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