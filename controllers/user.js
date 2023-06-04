const { userInfo } = require('os')
const path = require('path')
const BookInfo = require('../models/register')
const UserInfo = require('../models/register')
const Userian = require('../models/userian')


module.exports.registerUser = async(req,res) =>{
    let userInfo = new User(req.body.email, req.body.pw, req.body.name, req.body.address)
    try {
        await Userian.registerUser(userInfo)
        res.redirect('/')
    } catch(error){
        res.render('register-error', {"msg": error.toString()})
    }
}

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

