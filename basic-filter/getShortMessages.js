function getShortMessages(messages) {
    const shortMessages = messages.map(msg => {
        let msgProp = msg.message;
        if (msgProp === undefined) {
            throw new Error("all the objects of the array should have '.message' property");
        }
        return msgProp;
    }).filter(msg => msg.length < 50);
    return shortMessages;
}

module.exports = getShortMessages;