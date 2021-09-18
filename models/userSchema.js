const { Schema } = require("mongoose");
const Exercise = require("./exerciseSchema");

const User = new Schema({
    username: {
        type: String,
        required: true
    },
    log: [Exercise],
    
})
module.exports = User;