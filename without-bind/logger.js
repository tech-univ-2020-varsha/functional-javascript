function logger(prefix) {
    return (...message) => {
        console.log(prefix, ...message);
    }
}

module.exports = logger;