const configureClientPath = require('../routes/client');
const configureApi = require('../routes/api');
const express = require('express');
const expressLoader = (app) => {

    const cors = require('cors')
    app.use(cors());

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    configureClientPath(app);
    configureApi(app);
   

}
module.exports = expressLoader;