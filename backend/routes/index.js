const express= require('express')
const userRouter = require('../routes/userRouter')
const mainrouter= express.Router()



mainrouter.use('/users', userRouter);

module.exports = mainrouter