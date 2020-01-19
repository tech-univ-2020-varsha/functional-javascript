const call = (...args) => {
	if (args.length == 0)
		return 0;
	else {
		let count = args.filter((value) => Object.prototype.hasOwnProperty.apply(value, ['quack']) == true).length;
		return count;
	}
}

module.exports = call;