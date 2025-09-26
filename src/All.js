const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
const IntializeDB=async()=>{
    try{
         await mongoose.connect(
      "mongodb+srv://VishnuDev:srxR3fYnjuS0h23e@vishnudev.7g1lbox.mongodb.net/devTinder"
    );
    console.log("Mongo DB Connected Successfully")
    app.listen(2425,()=>{
    console.log("App Is listening In the Port Number 2425")
})

    }catch(err){
        console.log(err.message)
    }
  

};
IntializeDB()
const signUp=mongoose.Schema({
    "name":String,
    "City":String,
    "Pincode":Number,
    "Rollno":String
});

const signupmodel=mongoose.model("signupmodel",signUp)

app.post("/signup",async(req,res)=>{
    try{
        const userdetails=req.body
        const newUser=new signupmodel(userdetails)
        await newUser.save()
        res.send("process Executed Successfully")

    }catch(err){
        res.status(500).send("Something Went Wrong")
    }
    

})
app.post("/verifyuser",async(req,res)=>{
    try{
        const {name}=req.body
        const getdetails=await signupmodel.findOne({name});
        res.send(getdetails)
        console.log("It is executed Successfully")


    }catch(error){
        res.status(401).send("Something Went Wrong")
    }
    

})
app.get("/getalluser",async(req,res)=>{
    try{
        const alldetails = await signupmodel.find({});
        res.send(alldetails)
        console.log("Executed Successfully")

    }catch(err){
        res.status(500).send("Something Went Wrong")
    }

})

app.patch("/updateUser", async (req, res) => {
  try {
    const { _id, name } = req.body;

    if (!_id || !name) {
      return res.status(400).send("Please provide both _id and name");
    }

    const responsedata = await signupmodel.findByIdAndUpdate(
      _id, // just pass the id
      { name }, // update field
       // return updated document
    );

    if (!responsedata) {
      return res.status(404).send("User not found");
    }

    res.send(responsedata);
    console.log("Everything is going fine");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Internal Error. Please contact Admin");
  }
});
