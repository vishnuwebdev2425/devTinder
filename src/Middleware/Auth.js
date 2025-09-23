const UserAuth=(req,res,next)=>{
    const token = "XCZ";
    const AdminAuth = token === "XYZ";
    if (AdminAuth) {
      next();
    } else {
      res.status(401).send("Admin is not Verified Please Contact Support");
    }
}
const AdminAuth=(req,res,next)=>{
    const token = "XCZ";
    const AdminAuth = token === "XYZ";
    if (AdminAuth) {
      next();
    } else {
      res.status(401).send("Admin is not Verified Please Contact Support");
    }
}
module.exports={UserAuth,AdminAuth}