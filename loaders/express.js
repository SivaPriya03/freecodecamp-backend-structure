const configureClientPath = require('../routes/client');

const express = (app) => {

    const cors = require('cors')
    app.use(cors())
    
    configureClientPath(app);
   

}
module.exports = express;