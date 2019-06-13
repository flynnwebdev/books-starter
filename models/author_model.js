const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'non binary'],
        default: 'non binary'
    },
    image: {
        type: String
    }
})

const AuthorModel = mongoose.model("author", AuthorSchema)

module.exports = { AuthorModel, AuthorSchema }