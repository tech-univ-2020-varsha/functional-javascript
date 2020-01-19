const duckCount = require('./call');

describe('the call function', () => {
	it('should return a number', () => {
		var notDuck = Object.create({quack: true});
		var duck = {quack: true};
		const result = duckCount(notDuck, duck);
		expect(typeof result).toBe('number');
	});

	it('should return the number of args that have quack property directly defined', () => {
		const result = duckCount(Object.create({quack: true}), {quack: true});
		expect(result).toBe(1);
	});

	it('should return 0 if no args are passed', () => {
		const result = duckCount();
		expect(result).toBe(0);
	});
    

});