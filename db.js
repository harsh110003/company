const mongoose = require('mongoose')

mongourl = 'mongodb://localhost:27017/revise'

mongoose.connect(mongourl, {
    useNewURLParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection

db.on('connected' , () => {
    console.log('Mongoose is connected')
})

db.on('error', (err) => {
    console.log(err + 'error in connection')
})

module.exports = db