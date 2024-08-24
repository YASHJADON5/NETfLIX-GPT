const mongoose= require("mongoose")
const monogodburl= process.env.Mongo_connection_url;

const mongooseUrl= monogodburl;
function connectMongoose(){
    
    mongoose.connect(mongooseUrl)
    .then(()=>{
       console.log("connection established successfully")
    })
    .catch((err)=>{
        console.log("Error connecting to mongodb " + err)
    })

}

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    email:{

        type:String,
        required:true,
        trim:true,
        unique:true

    },
    password:{
        type:String,
        minlength:6,
        required:true

    }
})

const user= mongoose.model('user', userSchema)






module.exports = {
    connectMongoose,
    user
};

