const express = require("express")
const router = express.Router()
const BookController = require("../controllers/book_controller")

// CREATE
router.post("/", BookController.create)
router.get("/new", BookController.make)
// READ
router.get("/", BookController.index)
router.get("/:id", BookController.show)
// UPDATE
router.get('/:id/edit', BookController.edit)
router.put('/:id', BookController.update)
// DELETE
router.delete("/:id", BookController.destroy)

module.exports = router