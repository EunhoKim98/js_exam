// const fs = require('fs').promises
const db = require('../util/mysql')

module.exports = class Librarian {
    constructor(booksStorage) {
        this.booksStorage = booksStorage
    }

    registerBookInfo(bookInfo) {
        let queryStr = `INSERT INTO book_info VALUES`
            + `("${bookInfo.isbn}", "${bookInfo.title}", "${bookInfo.author}",`
            + `"${bookInfo.publisher}", "${bookInfo.price}")`

        return db.query(queryStr)
    }

    async registerBook(book) {
        const queryStr = "INSERT INTO books VALUES"
            + `("${book.id}", "${book.place}", "${book.isbn}")`

        return db.query(queryStr)
    }

    async fetchAll() {
        const queryStr = "SELECT * FROM books INNER JOIN book_info On books.isbn = book_info.isbn"

        return db.query(queryStr)
    }

    async searchBook(keyword) {
        const queryStr = "SELECT * FROM books INNER JOIN book_info ON books.isbn = book_info.isbn WHERE book_info.title = '" + keyword + "';";
    
        return db.query(queryStr);
    }
    
}