function checkUsers(goodUsers) {
    return (testUsers) => {
        return testUsers.every((user) => {
            return goodUsers.some((user1) => {
                return user1.id === user.id;
            })
        })

    };
}

module.exports = checkUsers;