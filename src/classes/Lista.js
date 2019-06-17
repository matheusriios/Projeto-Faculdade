import Album from './Album'
import Pilha from './Pilha'
class Lista {
    constructor() {
        this.head  = 0
        this[this.head] = null;
    }
    
    add(data) {            
        const newNode = new Album(data);
                
        if (this[this.head] === null) {
            this[this.head] = newNode;
            newNode.next = newNode;
            newNode.previous = newNode;
        } else {
            const tail = this[this.head].previous;

            tail.next = newNode;
            newNode.previous = tail;
            newNode.next = this[this.head];
            this[this.head].previous = newNode;
        }
    }

    get(index) {        
        if ((index > -1) && (this[this.head] !== null)) {
            let current = this[this.head];
            let i = 0;

            do {
                if (i === index) {
                    return current;
                }

                current = current.next;
                i++;

            } while ((current !== this[this.head]) && (i <= index));
        }

        return undefined;
    }    
}

export default Lista