
export default class Artista {
    constructor(data, estilo) {
        this.data    = data
        this.estilo  = estilo  
        this.album   = null        
        this.right   = null
        this.left    = null    
    }        

    getAlbum (index) {
        return this.album.get(index)
    }
}