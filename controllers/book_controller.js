const { BookModel } = require("../models/book_model")
const {
    AuthorModel
} = require("../models/author_model")

async function create(req, res) {
    //logic for creating a resource
    let {title, published, author} = req.body
    let book = await BookModel.create({ title, published, author })
        .catch(err => res.status(500).send(err))

    res.redirect("/books")
}

async function index(req, res) {
    //showed a list of all the resources
    let books = await BookModel.find().populate('author')
    res.render('layout', {
        view: 'book/index',
        title: 'All Books',
        books
    })
    // res.render("book/index", {books})
}

async function show(req, res) {
    let book = await BookModel.findById(req.params.id).populate('author')
    res.render('layout', {
        view: 'book/show',
        title: 'Book',
        book
    })
}

async function make(req, res) {
    //shows the form to create the resource
    const authors = await AuthorModel.find()
    res.render('layout', {
        view: 'book/new',
        title: 'New Book',
        authors
    })
    // res.render("book/new")
}

async function destroy(req, res) {
    await BookModel.findByIdAndRemove(req.params.id)
    res.redirect("/books")
}

module.exports = {
    create,
    index,
    make,
    show,
    destroy
}