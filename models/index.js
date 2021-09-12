const mongoose = require("mongoose")
const User = require("./userSchema")

const UserModel = mongoose.model('User', User);
module.exports = {
    User: UserModel    
}