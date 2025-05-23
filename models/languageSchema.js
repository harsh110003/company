const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    name : {
        type : String,
        enum : ['python', 'javascript', 'c++', 'java'],
        required : true
    }, 
    framework : {
        type : String,
        required : true,
        default : []
    },
    experience: {
        type : Number,
        required : true
    }
})

const Language = mongoose.model('Language', LanguageSchema);

module.exports = Language