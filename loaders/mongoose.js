const configureMongoose = () => {
    const mongoose = require('mongoose');
    const { mongo_uri } = require('../config/envvars');
    mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
    /* Configure models */

}

module.exports = configureMongoose;