const path = require('path')
const User = require('../models/register')
const Userarian = require('../models/userarian')
const UsersPath = path.join(process.cwd(), "data", "users.json")
const userarian = new Userarian(UsersPath)
const LoginPath = path.join(process.cwd(), "data", "users.json")
const Loginarian = new Userarian(LoginPath)


module.exports.registerUser = async(req,res) =>{
    let userInfo = new User(req.body.email, req.body.pw, req.body.name, req.body.address)
    try {
        await userarian.registerUser(userInfo)
        res.redirect('/')
    } catch(error){
        res.render('register-error', {"msg": error.toString()})
    }
}

module.exports.login = async(req,res) =>{
    let id = req.body.email
    let pw = req.body.pw
    try {
        let a = await Loginarian.login(id,pw)        

        res.render('index', {"email":a})
    } catch(error){
        res.render('register-error', {"msg": error.toString()})
    }
}

