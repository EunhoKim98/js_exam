const express = require('express')
const librarianController = require('../controllers/library')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('library/index')
})

router.get('/register-book-info', (req, res) => {
    res.render('library/register-book-info')
})

router.post('/register-book-info', librarianController.registerBookInfo)

router.get('/register-book', (req, res) => {
    res.render('library/register-book')
})

router.post('/register-book', librarianController.registerBook)

router.get('/show-books', librarianController.showBooks)

router.get('/search-books', (req, res) => {
    res.render('library/search-books')
})
router.post('/search-books', librarianController.searchBooks)


module.exports = router


