class Pilha {
    constructor(){
        this.topo  = -1        
        this.pilha = []
    }

    inserir(musica) {
        this.topo++
        this.pilha.push(musica)
    }

    pop(){
        this.pilha.pop()
    }

    getPilha () {
        this.pilha.forEach(p => {
            return p
        })
    }

}

export default Pilha