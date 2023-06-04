const path = require('path')
const BookInfo = require('../models/book_info')
const Book = require('../models/book')
const Librarian = require('../models/librarian')

const booksPath = path.join(process.cwd(), "data", "books.json")
const librarian = new Librarian(booksPath)

module.exports.registerBookInfo = async (req, res) => {
    let bookInfo = new BookInfo(req.body.isbn, req.body.title,
        req.body.author, req.body.publisher, parseInt(req.body.price, 10))

    try {
        await librarian.registerBookInfo(bookInfo)
        res.redirect('/library')
    } catch (error) {
        res.render('library/register-error', {"msg": error.toString()})
    }
}

module.exports.registerBook = async (req, res) => {
    let book = new Book(req.body.id, req.body["place"], req.body.isbn)

    // librarian.registerBook(book)
    //     .then(() => res.redirect('/library'))
    //     .catch(error => res.render('libary/register-error', {"msg": error.toString()}))
    try {
        await librarian.registerBook(book)
        res.redirect('/library')
    } catch (error) {
        res.render('library/register-error', {"msg": error.toString()})
    }
}

module.exports.showBooks = async (req, res) => {
    try {
        let [results, fields] = await librarian.fetchAll()
        console.log(results)
        res.render('library/show-books', {"books": results})
    } catch (error) {
        res.render('library/show-books-error', {"msg": error.toString()})
    }
    
}

module.exports.searchBooks = async (req, res) => {
    let keyword = req.body.title
    try {
        let [results, fields] = await librarian.searchBook(keyword)
        console.log(results)
        res.render('library/search-books', {"books": results})
    } catch (error) {
        res.render('library/search-books-error', {"msg": error.toString()})
    }
    
}