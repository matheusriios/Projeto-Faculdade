import Artista from './Artista'
import Album from './Album'
import Lista from './Lista'
import Pilha from './Pilha';

class BuscaArvoreBinaria{
    constructor(){
        this.root = null
        this.countIndexNode = 0;
    }

    getArtista (data) {
        let artista = this.search(this.root, data)
        return artista
    }

    addAlbum(data, dataAlbum) {        
        let artista = this.search(this.root, data)
        
        if(artista.album === null){
            const newLista = new Lista()                                 
            artista.album  = newLista    
        }
                      
        artista.album.add(dataAlbum)
    }
        
    insert(data, estilo) {                 
        let newArtista = new Artista(data, estilo); 
                                       
        if(this.root === null) 
            this.root = newArtista; 
        else                            
            this.insertArtista(this.root, newArtista); 
    } 
                
    insertArtista(artista, newArtista) {                 
        if(newArtista.data < artista.data) {             
            if(artista.left === null) 
                artista.left = newArtista; 
            else                                    
                this.insertArtista(artista.left, newArtista);  
        }else {             
            if(artista.right === null) 
                artista.right = newArtista; 
            else                                    
                this.insertArtista(artista.right, newArtista); 
        } 
    } 

    search(node, data) {                   
        if(node === null) 
            return null; 

        else if(data < node.data) {            
            return this.search(node.left, data) 
        }
            
        else if(data > node.data) {            
            return this.search(node.right, data)                        
        }
        else{            
            return node; 
        }
    }

    inorder(node) 
    { 
        if(node !== null) 
        {             
            this.inorder(node.left);              
            this.inorder(node.right); 
        } 
    }

    getRootNode() 
    { 
        return this.root; 
    } 
}

export default BuscaArvoreBinaria