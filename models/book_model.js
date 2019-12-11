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
        type: mongoose.Schema.Types.ObjectId,
        ref: "author"
    }
})

BookSchema.methods.getPublished = function () {
    return this.published.toISOString().split("T")[0]
}

const BookModel = mongoose.model("book", BookSchema)

module.exports = { BookModel, BookSchema }