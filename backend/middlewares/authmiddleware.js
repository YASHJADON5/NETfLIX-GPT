
const jwtKey= process.env.JWT_KEY;
const jwt= require('jsonwebtoken')

const authMiddleware= (req,res,next)=>{
     
    const authHeader= req.headers.authorization;


    if(!authHeader|| !authHeader.startsWith('Bearer ')){
        return res.status(401).send({
            message:"unauthorized: no token provided"
        })
    }


    try{

        const token= authHeader.split(' ')[1]
     
        
        const decoded = jwt.verify(token,jwtKey)

        if(decoded){
            req.userId=decoded._id
        }

        next();


    }
    catch(e){
          res.status(403).send({
               message:"token provided is not valid"
          })
    }




}

module.exports = authMiddleware;