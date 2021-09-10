const { Profile } = require("../models")
const {compareHash} = require("../helper/bcrypt.js")
class Controller{
    static home(req, res) {
        if (req.session.user.class === 'admin') {
            res.render('home')
        } else if(req.session.user.class === 'user'){
            res.redirect(`profiles/${req.session.user.id}`)
        }
    }

    static login(req, res) {
        let error = req.query.err || null
        res.render('login', {error})
    }

    static proccessLogin(req, res) {
        Profile.findOne({
            where: {
                username : req.body.username
            }
        })
            .then((user) => {
                console.log(user);
                if (compareHash(req.body.password, user.password)){
                    req.session.user = user
                    if (req.session.user.class === 'admin') {
                        res.redirect('/')
                    } else {
                        res.redirect(`/profiles/${req.session.user.id}`)
                    }
                } else {
                    res.send('username atau password tidak Valid')
                }
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static formRegister(req, res) {
        res.render('register', {
            profile: {
                name: '',
                address: '',
                gender: '',
                birth_od_date: '',
                username: '',
                password: ''
            }
        })
    }

    static register(req, res) {
        let data = req.body
        Profile.create(data)
            .then(() => {
                res.redirect('/login')
            })
            .catch(err => res.send(err))
    }

    static logout(req, res) {
        req.session.destroy(err => {
            if (err) res.send(err)
            else res.redirect('/login')
        })
    }


}

module.exports = Controller