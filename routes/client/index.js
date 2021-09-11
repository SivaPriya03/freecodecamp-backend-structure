const express = require("express")

const configureClientPath = (app) => {
    const rootPath = process.cwd();
    const clientFolder = rootPath + '/client';
    app.use(express.static( clientFolder + '/public'));
    app.get('/', (req, res) => {
      res.sendFile(clientFolder + '/views/index.html')
    }); 
    
}
module.exports = configureClientPath;