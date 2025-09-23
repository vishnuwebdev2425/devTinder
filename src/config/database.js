const mongoose=require('mongoose')
const DBConnection=async()=>{

    await mongoose.connect("mongodb+srv://VishnuDev:srxR3fYnjuS0h23e@vishnudev.7g1lbox.mongodb.net/devTinder"
      
    );

}

module.exports=DBConnection