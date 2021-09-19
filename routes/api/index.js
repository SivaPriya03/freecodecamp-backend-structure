const { API_URLS } = require("../../config/route");

const configureAPI = (app, upload) => {

    app.post(API_URLS.FILE_ANALYSE, upload.single('upfile'), (req, res) => {
       const file = req.file;
       if(file){
         const { mimetype, originalname, size } = file;
         res.json({ name: originalname, type: mimetype , size})
       }
       else{
           res.send('Unexpected File type please check the file')
       }
   })

   app.use((req, res) => {
       res.send('Not found');
   })
}


module.exports = configureAPI;