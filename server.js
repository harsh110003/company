const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Person = require('./models/personSchema')
const router = require('./routes/personRoute')
app.use('/person', router)













app.listen(3000, () => {
    console.log('Server is running on port 3000')
})