const jwt=require("jsonwebtoken")
require("dotenv").config();
const authentication=(req,res,next)=>{
    const token=req.headers.authorization;
    try {
        if(token){
            const decoded= jwt.verify(token, process.env.key)
            //console.log(decoded);
            const userID=decoded.userID
                 if(decoded){
                    req.body.userID=userID
                     next();
                 }else{
                     res.json("Login First!") 
                 }
              
         }else{
             res.json("Login First!")
         }
    } catch (error) {
        console.log(error.message);
        res.send({message:error.message})
    }
    
}

module.exports={
    authentication
}