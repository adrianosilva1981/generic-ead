require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// connect db
const mongoHost = process.env.MONGODB_HOST
const mongoPort = process.env.MONGODB_PORT
const mongoUser = process.env.MONGODB_USER
const mongoPass = process.env.MONGODB_PASS
const mongoDB = process.env.MONGODB_NAME

mongoose.Promise = Promise
mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDB}`)
// mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/${mongoDB}`)

require('./models/user');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
const commonRouter = require('./routes/commonRoutes')
const authRouter = require('./routes/authRoutes')

app.use('/public', express.static('./public/'))
app.use('/common', commonRouter)
app.use('/auth', authRouter)

module.exports = app