require('dotenv').config()
const app = require('./app')

// start
app.listen(process.env.APP_PORT)
console.log(`Server started at ${process.env.PUBLIC_DOMAIN}:${process.env.APP_PORT}`)