import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
       type:String ,
       required:true,
       unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastlogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    verificationToken:String,
    verificationExpires:Date,

}, {timestamps:true});
 // time stamp will add created and updated field
 export const User = mongoose.model('User', userSchema);