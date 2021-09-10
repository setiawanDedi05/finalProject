const {Profile, Point, sequelize} = require("../models/")
class ProfileController{
    static home(req, res) {
        Point.findAll({
            attributes: [
                'ProfileId',
                [sequelize.fn('sum', sequelize.col('point')), 'total_point'],
            ],
            group: ['ProfileId']
      })
            .then(profiles => {
                res.send(profiles)
                // res.render('profiles', {profiles})
            })
            .catch(err => {
                console.log(err.stack);
                res.send(err.stack)
            })
    }

}

module.exports = ProfileController