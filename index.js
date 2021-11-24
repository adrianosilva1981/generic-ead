require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// connect db
const mongoUser = process.env.MONGODB_USER
const mongoPass = process.env.MONGODB_PASS
const mongoDB = process.env.MONGODB_NAME

mongoose.Promise = Promise
// mongoose.connect(`'mongodb://${mongoUser}:${mongoPass}@localhost:27017/${mongoDB}'`)
mongoose.connect(`'mongodb://user:123456@localhost:27017/ead'`)

require('./models/user');

// public files
app.use('/public', express.static('./public/'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
const commonRouter = require('./routes/commonRoutes')
const authRouter = require('./routes/authRoutes')

app.use('/common', commonRouter)
app.use('/auth', authRouter)

// start
app.listen(process.env.APP_PORT)
console.log(`Server started at ${process.env.PUBLIC_DOMAIN}:${process.env.APP_PORT}`)