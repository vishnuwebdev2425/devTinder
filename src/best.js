const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
const DBConnection=async()=>{
    try{
        await mongoose.connect("mongodb+srv://VishnuDev:srxR3fYnjuS0h23e@vishnudev.7g1lbox.mongodb.net/devTinder");
    console.log("DB Connected Successfully");
    app.listen(7777,()=>{
        console.log("port is listening in this server")
    })


    }catch(err){
        console.log(err.message)
    }
    
}
DBConnection()
const UserSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    city:String
})
const User=mongoose.model("User",UserSchema)


app.post("/signin",async(req,res)=>{
    const data=req.body
    const Userdetails=new User(data)
    console.log(Userdetails)
    try{
        await(Userdetails.save())
        console.log("User is Created Successfully")
        console.log("Try to check it im Postmain forthe response");
        res.send("User added Successfully")
    }catch(err){
        res.status(400).send("Unable To fetch The details")
    }
    

})