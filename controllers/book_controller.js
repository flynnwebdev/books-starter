const { BookModel } = require("../models/book_model");
const { AuthorModel } = require("../models/author_model")

async function create(req, res) {
  //logic for creating a resource
  let { title, published, author } = req.body;
  let book = await BookModel.create({ title, published, author }).catch(err =>
    res.status(500).send(err)
  );

  res.redirect("/books");
}

async function show(req, res) {
  // Get id from params
  let { id } = req.params;
  // Search book by id
  let book = await BookModel.findById(id).populate("author");
  // Render the show view, passing in the book object
  res.render("book/show", { book });
}

async function index(req, res) {
  //showed a list of all the resources
  let books = await BookModel.find().populate("author");
  // let books = books.map(async (book) => await book.execPopulate("author"))
  res.render("layout", {
    view: "book/index",
    title: "All Books",
    books
  });
  // res.render("book/index", {books})
}

async function make(req, res) {
  //shows the form to create the resource
  let authors = await AuthorModel.find()
  res.render("layout", {
    view: "book/new",
    title: "New Book",
    authors
  });
  // res.render("book/new")
}

async function edit(req, res) {
  let authors = await AuthorModel.find()
  let book = await BookModel.findById(req.params.id).populate("author")
  res.render("book/edit", { book, authors })
}

async function update(req, res) {
  let { title, published, author } = req.body
  let { id } = req.params
  await BookModel.findByIdAndUpdate(id, { title, published, author })
  res.redirect(`/books/${id}`)
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
  edit,
  update,
  destroy
};
