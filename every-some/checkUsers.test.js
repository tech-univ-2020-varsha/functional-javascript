const checkUsersValid = require('./checkUsers');

describe('a function that takes a list of valid users,', () => {
    it('should return a function', () => {
        let goodUsers = [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]
        let testAllValid = checkUsersValid(goodUsers);
        expect(typeof testAllValid).toBe('function');
    });
    it('should return boolean,', () => {
        let goodUsers = [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]
        let testAllValid = checkUsersValid(goodUsers)
        const result = testAllValid(
            [
                { id: 2 },
                { id: 1 }
            ]
        );
        expect(typeof result).toBe("boolean");
    });

    it('should return true when all the users passed as argument for testAllValid are present in goodusers', () => {
        let goodUsers = [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]
        let testAllValid = checkUsersValid(goodUsers)
        const result = testAllValid(
            [
                { id: 2 },
                { id: 1 }
            ]
        );
        expect(result).toBe(true);
    });

    it('should return false when all the users passed as argument for testAllValid are not present in goodusers', () => {
        let goodUsers = [
            { id: 1 },
            { id: 4 },
            { id: 3 }
        ]
        let testAllValid = checkUsersValid(goodUsers)
        const result = testAllValid(
            [
                { id: 2 },
                { id: 1 }
            ]
        );
        expect(result).toBe(false);
    });
});