const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'author'
    }
})

const BookModel = mongoose.model("book", BookSchema)

module.exports = {
    BookModel,
    BookSchema
}