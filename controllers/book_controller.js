const { BookModel } = require("../models/book_model");

async function create(req, res) {
  //logic for creating a resource
  let { title, published } = req.body;
  let book = await BookModel.create({ title, published }).catch(err =>
    res.status(500).send(err)
  );

  res.redirect("/books");
}

async function show(req, res) {
  // Get id from params
  let { id } = req.params;
  // Search book by id
  let book = await BookModel.findById(id);
  // Render the show view, passing in the book object
  res.render("book/show", { book });
}

async function index(req, res) {
  //showed a list of all the resources
  let books = await BookModel.find();
  res.render("layout", {
    view: "book/index",
    title: "All Books",
    books
  });
  // res.render("book/index", {books})
}

async function make(req, res) {
  //shows the form to create the resource
  res.render("layout", {
    view: "book/new",
    title: "New Book"
  });
  // res.render("book/new")
}

async function edit(req, res) {
  let book = await BookModel.findById(req.params.id)
  res.render("book/edit", { book })
}

async function update(req, res) {
  let { title, published } = req.body
  let { id } = req.params
  await BookModel.findByIdAndUpdate(id, { title, published })
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
