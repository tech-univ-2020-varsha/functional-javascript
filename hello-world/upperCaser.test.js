const upperCaser = require('./upperCaser');

describe('function that takes an input string and returns it uppercased', () => {
    it('should return empty string for no args', () => {
        const result = upperCaser();
        expect(result).toBe("");
    });
    it('should return string with all capital letters', () => {
        const result = upperCaser("str");
        expect(result).toBe("STR");
    });
});