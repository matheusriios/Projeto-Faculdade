import Pilha from './Pilha'
import Musica from './Musica'

export default class Album {
    constructor(nome, estilo) {
        this.nome    = nome        
        this.musicas = null
        this.next
        this.previous
    }

    addMusica(dataMusica) {        
        
        const musica = new Musica(dataMusica.nome, dataMusica.path)

        if(this.musicas === null){
            const newPilha = new Pilha()
            this.musicas = newPilha
        }
                              
        this.musicas.inserir(musica)
    }

    // connect(node) {
    //     if (this.next !== null) {
    //       node.connect(this.next)
    //     }
    //     this.next = node
    // }

    // disconnect() { 
    //     var next = this.next.getNext()
    //     this.next = null
    //     this.connect(next) 
    // }
}