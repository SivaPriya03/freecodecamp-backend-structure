const configureClientPath = require('../routes/client');
const configureApi = require('../routes/api');

const express = (app) => {
    const multer  = require('multer')
    const upload = multer({ dest: 'uploads/' })

    const cors = require('cors')
    app.use(cors());
    configureClientPath(app);
    configureApi(app, upload);
   

}
module.exports = express;