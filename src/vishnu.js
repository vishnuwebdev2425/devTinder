const express=require('express');
const app=express();
const {AdminAuth,UserAuth}=require('./Middleware/Auth')


app.get("/admin/dashboard",AdminAuth,(req,res)=>{
    res.send("welcome to Admin Dashboard");
})
app.get("/user/signin",(req,res)=>{
    res.send("Buddy You are in Right way")
})

app.get("user/profile",UserAuth,(req,res)=>{
    res.send('working Successfully');
})
app.listen(7777,()=>{
    console.log("App Is listening on port 7777");
})