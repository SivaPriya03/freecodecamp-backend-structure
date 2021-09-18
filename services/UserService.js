const { User } = require('../models');
const { convertDateToStr, convertStrToDate } = require('../utils');
const { getQueries } = require('../utils/query');
const mongoose = require('mongoose')

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

    async addExercise(data, id){
        const { description, duration, date } = data;
        const user = await this.model.findById(id);
        const value = { description, duration, date: new Date(date) };
        if(!user){
          console.log({ id, data });
          return { };
        }
        if(user.log){
          user.log.push(value);
        }
        else{
          user.log = [value];
         }
        const logs = await user.save();
        return { 
            _id: id, 
            username: user.username,
            date: convertDateToStr(date),
            duration: duration, 
            description: description
        };
    }

    async getUserLogs(query = {}, userId){
        const queries = getQueries(query, userId);
        const [ user ] = await this.model.aggregate(queries, 'username log');
        const { _id, username, log = [] } = user;
        return { _id, username, count: log.length, log: log.map(ele => ({ ...ele , date: convertDateToStr(ele.date) })) };
    }
}

module.exports = UserService;