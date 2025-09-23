const express=require('express');
const app=express();

app.use("/home",(req,res)=>{
    res.send("Hello from vishnus server")
})
app.use("/profile",(req,res)=>{
    res.send("You are entered into the profie page")

})

app.listen(7777,()=>{
    console.log("App Is listening on port 7777");
})