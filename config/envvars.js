require('dotenv').config({ path: __dirname + '/.env'});
module.exports = {
    mongo_uri: process.env.MONGO_URI
}