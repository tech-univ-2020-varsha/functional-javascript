function logger(prefix) {
    return console.log.bind(console, prefix);
}

module.exports = logger;