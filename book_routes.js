const express = require("express")
const router = express.Router()
const BookController = require("./controllers/book_controller")

router.delete("/:id", BookController.destroy)

router.get("/", BookController.index)

router.get("/new", BookController.make)

router.get("/:id", BookController.show)

router.post("/", BookController.create)

module.exports = router