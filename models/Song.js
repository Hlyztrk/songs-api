const songs = require("../songs.json")

class Song {
    constructor(song) {
       this.title = song.title
       this.artist = song.artist
       this.artwork =  song.artwork
       this.url = song.url
       this.id = song.id
    }

    static showAll() {
        return songs.map(s => new Song(s))
    }

    static show(id){
        const song = songs.find(song => song.id == id)
        if(song){
            return new Song(song)
        }else{
            throw `The song with ${id} doesn't exist` 
        }
    
    }

    static create(data) {
        const newSong = data

        newSong['id'] = (songs.length + 1).toString()

        songs.push(newSong)

        return new Song(newSong)
    }

    update(data){
        const updateSong = songs.find(song => song.title == this.title)
    if(updateSong) {
        updateSong.title = data.title
        updateSong.artist = data.artist

        return new Song(updateSong)
    }else{
        throw `${updateSong} not found`
    }
    
    }

    destroy(){
        const deletedSong = songs.find(song => song.title == this.title)

        if(deletedSong){
            const index = songs.indexOf(deletedSong)

            songs.splice(index, 1)
        }else{
            throw `${deletedSong} not found`
        }
    }

}

module.exports = Song