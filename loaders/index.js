const express = require("./express")
const mongoose = require("./mongoose")

const configureLoaders = (app) => {
    express(app);
    mongoose();

}

module.exports = configureLoaders;