const express = require("express")
const router = express.Router()
const multer = require('multer')
const path = require('path')
const AuthorController = require("./controllers/author_controller")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

router.delete("/:id", AuthorController.destroy)

router.get("/", AuthorController.index)

router.get("/new", AuthorController.make)

router.get("/:id", AuthorController.show)

router.post("/", upload.single('image'), AuthorController.create)

router.get("/:id/edit", AuthorController.edit)

router.put("/:id", AuthorController.update)

module.exports = router