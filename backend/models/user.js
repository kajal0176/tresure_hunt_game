

import mongoose  from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({  
    email:{type:String,required:true,unique:true},
    userInfo:{type:Schema.Types.Mixed},
    userClueInfo:[mongoose.Schema.Types.Mixed]
},{timestamps:true});

export default mongoose.model('Candidate',UserSchema,'candidates')