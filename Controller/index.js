const {Profile} = require('../models')
const session = require('express-session')

class Controller{
    static home(req, res) {
        req.session.user = { 
            id: 0,
            username: ""
        }
        res.render(".", {name: req.session.user.username})
    }

    static loginForm(req, res) {
        // kalau sudah login, tidak boleh buka halaman login
        let error = req.query.err || null
        res.render('login', {error})
    }

    static login(req, res) {
        console.log(req.body);
        Profile.findOne({
            where: {
                username: req.body.uname
            }
        })
            .then((user) => {
                console.log(user);
                if(user){
                    if( true){
                        req.session.user = user
                        res.redirect('/')
                    } else {
                        throw new Error ('password tidak sesuai')
                    }
                } else {
                    throw new Error ('username tidak ada')
                }
            }).catch((err) => {
                res.redirect('/login?err=' + err.message )
            });
    }

    static logout(req, res){
        req.session.destroy(err => {
            if(err) res.send(err)
            else res.redirect('/login')
        })
    }

    static registerForm(req, res) {
        res.render('register', {error: null})
    }

    static register (req, res) {
        let data = {
            username: req.body.uname,
            password: req.body.upass
        }
        Profile.create(data)
            .then((result) => {
                res.redirect('/')
            }).catch((err) => {
                res.send(err)
            });
    }
}

module.exports = Controller