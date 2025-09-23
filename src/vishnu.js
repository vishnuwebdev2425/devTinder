const express=require('express');
const app=express();


app.get("/user",(req,res)=>{
    res.send({firstname:"Vishnu",lastname:"Yadav"});

})

app.patch("/user",(req,res)=>{
    res.send({firstname:"Sanjana"})
})

app.put("/user",(req,res)=>{
    res.send("User Details Updated to the Database Successfully");

})
app.get("/usersdetails",(req,res)=>{
    console.log(req.query);
    res.send("User Details Fetched Successfully");
})
app.get("/useraddress/:city/:state",(req,res)=>{
    console.log(req.params);
    res.send("User Address Fetched Successfully");
})

app.delete("/user",(req,res)=>{
    res.send("User deleted Successfully");
})


app.listen(7777,()=>{
    console.log("App Is listening on port 7777");
})