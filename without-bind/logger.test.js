const logger = require('./logger');

describe('the logger function', () => {
    it('logger should return a function', () => {
        let info = logger('INFO:');

        expect(typeof info).toBe('function');
    });
    it('inner func should return undefined', () => {
        const result = logger('INFO');
        result("message");
        expect(result("message")).toBeUndefined();
    });

    it('should have called logger with INFO and message', () => {
        console.log = jest.fn();
        const result = logger('INFO');
        result("message", 'hello');
        expect(console.log).toHaveBeenCalledWith('INFO', 'message', 'hello');
    });
});