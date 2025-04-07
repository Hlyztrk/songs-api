const Song = require('../models/Song')

const index = async (req, res) => {
    try{
        const songs = await Song.showAll()
        res.status(200).send(songs)
    }catch(err){
        res.status(500).send(`Error : ${err}`)
    }
}

const show = async (req, res) => {
    const id = req.params.id.toLowerCase()

    try{
        const song = await Song.show(id)
        res.status(200).send(song)
    }catch(err){
        res.status(404).send(`Error : ${err}`)
    }
}

const create = async (req, res) => {
    try{
        const newSong = await Song.create(req.body)
        res.status(201).send(newSong)
    }catch(err){
        res.status(409).send({error: err})
    }
}

const update = async (req, res) => {
    const title = req.params.title.toLowerCase()

    try{
        const song = await Song.show(title)
        const result = await song.update(req.body)

        res.status(200).send(result)
    }catch(err){
        res.status(400).send({error: err})
    }
}

const destroy = async (res, req) => {
    const title = req.params.title.toLowerCase()

    try{
        const song = await Song.show(title)
        const result = await song.destroy()

        res.sendStatus(204)
    }catch(err){
        res.status(404).send({error: err})
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}