const { Profile, Point, sequelize } = require("../models/")
const fs = require("fs")
const pdf = require("pdf-creator-node")
const path = require("path")

class ProfileController{
    static home(req, res) {
        Profile.findAll()
            .then(profiles => {
                // console.log(profiles[0].dataValues.total_point)
                res.render('profiles', {profiles})
            })
            .catch(err => {
                console.log(err.stack);
                res.send(err.stack)
            })
    }

    static seePoint(req, res){
        let profilePromise = Profile.findByPk(+req.params.id)
        let pointPromise = Point.getPoint(+req.params.id)

        Promise.all([profilePromise, pointPromise])
            .then(([profile, dataPoint]) => {
                console.log(dataPoint, "iniLoh")
                res.render('point', {profile, dataPoint})
            })
            .catch(err => res.send(err))
        
    }

    static formAdd(req, res) {
        res.render('formProfile', {
            profile: {
                name: '',
                address: '',
                gender: '',
                birth_od_date: '',
                username: '',
                password: ''
        }})
    }

    static addProfile(req, res) {
        let data = req.body
        Profile.create(data)
            .then(() => {
                res.redirect('/profiles')
            })
            .catch(err => res.send(err))
    }

    static formEdit(req, res) {
        Profile.findByPk(req.params.id)
            .then(profile => {
                res.render('formProfile', {profile})
            })
            .catch(err => res.send(err))
    }

    static edit(req, res) {
        Profile.update(req.body, {
            where: {
                id : +req.params.id
            }
        })
            .then(() => {
                res.redirect("/profiles")
            })
            .catch(err => res.send(err))
    }

    static destroy(req, res) {
        Profile.destroy({
            where: {
                id:+req.params.id
            }
        })
            .then(() => {
                res.redirect('/profiles')
            })
            .catch(err => res.send(err))
    }

}

module.exports = ProfileController