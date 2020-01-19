function repeat(operation, num) {
    if (num == 1) {
        operation();
        return;
    }
    else {
        operation();
        repeat(operation, num - 1);
    }

}

module.exports = repeat;