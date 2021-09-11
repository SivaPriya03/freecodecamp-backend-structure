const express = require("express")
function startServer(){
  const app = express();
  const configureLoaders = require("./loaders");
  configureLoaders(app);
  app.listen(3000, () => {
    console.log('Your app is listening on port 3000')
  })
}

startServer();