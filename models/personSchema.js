const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    age : {
        type:Number,
        required:true,
        default : 20
    },
    work : {
        type:String,
        enum : ['developer', 'tester', 'manager'],
        required:true
    },
    email : {
        type:String,
        required:true,
        unique : true
    },
    contact : {
        type:Number,
        required:true
    },
    address : {
        type:String,
        required:true
    },
    salary : {
        type:Number,
        required:true
    }

})

const Person = mongoose.model('Person', personSchema)

//For testing purpose

module.exports = Person