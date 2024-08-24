const express= require('express')

const userRouter= express.Router();

const {user} = require('../db')

const {z}= require('zod')

const authMiddleware= require('../middlewares/authmiddleware')

const jwtKey= process.env.JWT_KEY;
const jwt= require('jsonwebtoken');



const signupBody=z.object({
    name:z.string(),
    password:z.string(),
    email:z.string().email()
})




userRouter.post('/signup', async(req,res)=>{
    try{

        const {success}= signupBody.safeParse(req.body);
        
        if(!success){
            return res.status(411).send({
                message:"data is invalid"
            })
        }

       const existingUser= await user.findOne({
          email:req.body.email
       })

       if(existingUser){
        return res.status(411).send({
            message:"user already exist"
        })
       }

       const User= await user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
       })
       const newUserId= User._id;

       const token= jwt.sign({
        _id: newUserId
       },
        jwtKey
       )
   
       res.status(200).send({
        message:"account created successfully",
        token:token
       })

    }
    catch(err){
       console.log( "the error is "+err)
    }


})

const signinBody= z.object({
    email:z.string().email(),
    password:z.string()
})

userRouter.post('/signin',async (req,res)=>{

    try{
        const {success}= signinBody.safeParse(req.body);

        if(!success){
           return res.status(403).send({
            message:"inputs are invalid"
           })
        }

        const UserEmail= await user.findOne({
            email:req.body.email
        })

        const UserPassword= await user.findOne({
            password:req.body.password
        })

        if(!UserEmail){
            return res.status(403).send({
                message:"user does not exist"
            })
        }
        if(!UserPassword){
            return res.status(403).send({
                message:"wrong password"
            })
        }
        const userId= UserEmail._id;
        const token= jwt.sign({
           _id:userId
        },jwtKey)

        res.status(200).send({
            message:"Signed in successfully",
            token:token
        })

    }
    catch(err){
          console.log(err)
    }

} )

userRouter.get('/validate-token', authMiddleware,(req,res)=>{
    res.status(200).json({ message: 'Token is valid' });
})




userRouter.post










module.exports=userRouter;