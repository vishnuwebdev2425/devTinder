const express=require('express');
const app=express();

app.use("/user",(req,res,next)=>{
    console.log("Intial Route Handler");
    next()
    
},[(req,res,next)=>{
    console.log("Second Route Handler");
  
    next()
},(req,res,next)=>{
    console.log("This is the third route handler");
    next()
    res.send("Finally we get Successed");
}],(req,res)=>{
    res.send("This is I want to executed")
    
    console.log("Executed Successfully")
})

app.listen(7777,()=>{
    console.log("App Is listening on port 7777");
})