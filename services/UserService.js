const { User } = require('../models');
const { convertDateToStr } = require('../utils');
class UserService{
    constructor(){
        this.model = User;
        this.createUser = this.createUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.addExercise = this.addExercise.bind(this);
        this.getUserLogs = this.getUserLogs.bind(this);
    }

    async createUser(username){
        const user = new this.model({ username }); 
        const obj = await user.save();
        return { username: obj.username, _id: obj._id };
    }   

    async getAllUsers(){
        const users = await this.model.find({}).select('username _id');
        return users;
    }

    async addExercise(data){
        const { description, duration, date } = data;
        const id = data[':_id'];
        const user = await this.model.findById(id);
        const userLogs = await user.logs.create({ description, duration, date: new Date(date) });

        return { 
            _id: id, 
            username: user.username,
            date: convertDateToStr(userLogs.date),
            duration: userLogs.duration, 
            description: userLogs.description
        };
    }

    async getUserLogs(query = {}){
        
    }
}

module.exports = UserService;