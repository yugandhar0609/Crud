import mongoose, { Mongoose } from "mongoose";

const user = new mongoose.Schema({
    userName:{type:String},
    age:{type:Number},
    course:{type:String},
    DOJ:{type:Date}


})
const UserDB = mongoose.model("data",user)

export default UserDB;