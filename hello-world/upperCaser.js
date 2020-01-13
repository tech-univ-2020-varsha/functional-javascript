function upperCaser(input) {
    if (input === undefined)
        return '';
    input = input.toString();
    return input.toUpperCase();
}

module.exports = upperCaser;