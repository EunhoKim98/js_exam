// const fs = require('fs').promises
const db = require('../util/mysql')

module.exports = class Userarian {
    constructor(UserStorage) {
        this.UserStorage = UserStorage
    }

    registerUser(userInfo){
        let queryStr = `INSERT INTO user VALUES`
            + `("${userInfo.email}", "${userInfo.pw}", "${userInfo.name}",`
            + `"${userInfo.address}")`
        
    return db.query(queryStr)

    }

    async login(id, pw) {
        const queryStr = `SELECT email FROM user WHERE email = 'test@test.com' AND pw = 'test'`;
        let a = await db.query(queryStr)
        console.log(a[0][0].email)
    
        return a[0][0].email
}}