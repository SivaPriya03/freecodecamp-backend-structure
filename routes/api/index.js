const apiPath = require("../../config/apiPath");
const UserService = require("../../services/UserService");

const configureAPI = (app) => {
   
    app.post(apiPath.USERS, async function(request, response){
        const { username } = request.body;
        const user = await new UserService().createUser(username);
        
        response.json(user);
    })

    app.get(apiPath.USERS, async function(request, response){
        const users = await new UserService().getAllUsers();
        response.json(users);
    })

    app.post(apiPath.USER_EXERCISE, async function(request, response){
        const users = await new UserService().addExercise(request.body);
        response.json(users);
    })
    
    app.get(apiPath.USER_LOGS, async function(request, response){
        const users = await new UserService().getUserLogs(request.query, request.params.id);
        response.json(users);
    })


}


module.exports = configureAPI;