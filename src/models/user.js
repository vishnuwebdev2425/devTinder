const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    address:String
})
//const User=mongoose.model("User",UserSchema)
//module.exports =User

module.exports=mongoose.model("User",UserSchema)