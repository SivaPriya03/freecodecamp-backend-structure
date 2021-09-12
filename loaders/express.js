const configureClientPath = require('../routes/client');
const configureApi = require('../routes/api');

const express = (app) => {

    const cors = require('cors')
    app.use(cors());
    configureClientPath(app);
    configureApi(app);
   

}
module.exports = express;