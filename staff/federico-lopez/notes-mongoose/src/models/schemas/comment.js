const { Schema, Types: { ObjectId } } = require('mongoose')

const comment = new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        maxlength: 280,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = comment