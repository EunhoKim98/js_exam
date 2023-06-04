// const fs = require('fs').promises
const db = require('../util/mysql')

module.exports = class Userian {
    constructor(UserStorage) {
        this.UserStorage = UserStorage
    }
    registerUser(userInfo){
        let queryStr = `INSERT INTO book_info VALUES`
            + `("${userInfo.email}", "${userInfo.pw}", "${userInfo.email}",`
            + `"${userInfo.address}")`
        
    return db.query(queryStr)

    }
    registerBookInfo(bookInfo) {
        let queryStr = `INSERT INTO book_info VALUES`
            + `("${bookInfo.isbn}", "${bookInfo.title}", "${bookInfo.author}",`
            + `"${bookInfo.publisher}", "${bookInfo.price}")`

        return db.query(queryStr)
    }

    
    
}