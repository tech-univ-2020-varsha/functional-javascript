const getShortMessages = require('./getShortMessages');

describe('The getShortMessages funtion', () => {

    it('should return array of messages that have <50 characters', () => {
        const messageArray = [
            { message: 'Esse id amet quis eu esse aute officia ipsum.' },
            { message: 'Esse id amet quis eu esse aute officia ipsum.' }
        ];

        const result = getShortMessages(messageArray);
        result.forEach(element => {
            expect(element.length).toBeLessThan(50);
        });
    });

    it('should return array of messages without their containing object', () => {
        const messageArray = [
            { message: 'Esse id amet quis eu esse aute officia ipsum.' },
            { message: 'Esse id amet quis eu esse aute officia ipsum.' }
        ];

        const result = getShortMessages(messageArray);
        result.forEach(element => {
            expect(typeof element).toEqual("string")
        });
    });


    it('should conatain array of objects with ".message" properties', () => {
        const messageArray = [
            { msg: 'Esse id amet quis eu esse aute officia ipsum.' },
            { message: 'Esse id amet quis eu esse aute officia ipsum.' }
        ];
        expect(() => {
            getShortMessages(messageArray);
        }).toThrowError("all the objects of the array should have '.message' property");

    });

})