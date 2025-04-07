const express = require('express')
const app = express()
const songs = require('./routes/songs')

app.get('/', (req, res) => {
    res.send('Hello, find the songs API')
})

app.use(express.json())
app.use('/songs', songs)

module.exports = app