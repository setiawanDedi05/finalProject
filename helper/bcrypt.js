const bcrypt = require('bcryptjs')

function hashPassword(password){
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    console.log(salt)
    return hash
}

function compareHash(passwordUser, passwordDB){
    return bcrypt.compareSync(passwordUser, passwordDB)
}

module.exports = {
    hashPassword, compareHash
}