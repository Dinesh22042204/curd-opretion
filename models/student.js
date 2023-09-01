const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required : true,
        default : false
    },
    E_mail: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student',studentSchema)
