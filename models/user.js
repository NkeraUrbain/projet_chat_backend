// const Schema  = require('mongoose').Schema;
// const model  = require('mongoose').Model;
const mongoose = require("mongoose")

const passportLocalMongoose = require('passport-local-mongoose')
                       
const UserSchema=  mongoose.Schema({
    nom:{
        type:String,
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
         type: String,
        required: true
    },
    password:{
        type: String,
       required: true
    }
    
},{timestamps: true});

UserSchema.plugin(passportLocalMongoose);
const User =mongoose.model('users',UserSchema)
module.exports= User

