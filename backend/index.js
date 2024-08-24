require('dotenv').config()
const mainrouter= require('./routes/index')

const {connectMongoose}=require('./db')

const express= require('express');

const app = express();


const cors= require("cors")

app.use(cors());

app.use(express.json())

app.use('/api/v1', mainrouter )

const PORT=3000;
app.listen(PORT,()=>{
    console.log("server is listning")
})

connectMongoose()
