const {Profile, Point, sequelize} = require("../models/")
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

}

module.exports = ProfileController