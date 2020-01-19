const doubleAll = require('./doubleAll');
describe('the doubleAll function', () => {
    it('should return array', () => {
        let numArray = [1, 2, 3];
        const result = doubleAll(numArray);
        expect(result).toBeInstanceOf(Array);
    });

    it('should double all the elements of the array', () => {
        let numArray = [1, 2, 3];
        const result = doubleAll(numArray);
        expect(result.toString()).toEqual([2, 4, 6].toString());
    });
});

