const repeat = require('./repeat');


describe('the higher order function', () => {
    it('should return undefined', () => {
        const operation = () => {
            console.log("Some operation");
        }
        const result = repeat(operation, 4);
        expect(operation()).toBeUndefined();
    });

    it('should call the function the "n" number of times as specified in second arg', () => {
        let operation = () => {
            console.log("Some operation");
        }
        operation = jest.fn();
        repeat(operation, 4);
        expect(operation).toHaveBeenCalledTimes(4);
    })
});