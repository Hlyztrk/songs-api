const express = require('express')
const cors = require('cors')
const app = express()
const songs = require('./routes/songs')

app.get('/', (req, res) => {
    res.send('Hello, welcome to the songs-api')
})

app.use(cors())
app.use(express.json())
app.use('/songs', songs)

module.exports = app