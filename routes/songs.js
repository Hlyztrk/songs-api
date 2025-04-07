const express = require('express')
const router = express.Router()
const songs = require("../controllers/songs")

router.get('/', songs.index)
router.get('/:id', songs.show)
router.post('/', songs.create)
router.patch('/:title', songs.update)
router.delete('/:title', songs.destroy)

module.exports = router