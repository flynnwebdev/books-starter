const express = require("express")
const router = express.Router()
const AuthorController = require("../controllers/author_controller")

// CREATE
router.post("/", AuthorController.create)
router.get("/new", AuthorController.make)
// READ
router.get("/", AuthorController.index)
router.get("/:id", AuthorController.show)
// UPDATE
router.get('/:id/edit', AuthorController.edit)
router.put('/:id', AuthorController.update)
// DELETE
router.delete("/:id", AuthorController.destroy)

module.exports = router