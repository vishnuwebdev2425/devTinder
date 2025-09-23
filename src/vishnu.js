const express=require('express');
const mongoose=require('mongoose')
const app=express();



const response=async()=>{
    const iniatializeDb = await mongoose.connect(
      "mongodb+srv://VishnuDev:srxR3fYnjuS0h23e@vishnudev.7g1lbox.mongodb.net/devTinder"
    );
    if(iniatializeDb!==undefined){
        console.log("DB is Intialized")
        app.listen(7777,()=>{
            console.log("Port is Listening in the server")
        })
    }else{
        console.log("Err is Occured")
    }


}

response()