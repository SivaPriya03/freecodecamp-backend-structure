const { Schema } = require("mongoose");

const Exercise = new Schema({
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        default: 60
    },
    date: {
        type: Date,
        required: true,
        default: () => new Date()
    }
}, { _id : false })
module.exports = Exercise;