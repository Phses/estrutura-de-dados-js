import { defaultEquals } from "../util/default-equals";
import { Node } from "./node";

class LinkedList<T> {
    count: number
    head: Node<T> | undefined
    equalsFn: Function
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn
    }
    //Add elemento final da lista
    push(element: T): void {
        const node = new Node(element);
        let current: Node<T>;
        if(this.head == null) { 
            this.head = node
        } else {
            current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = node
        }
        this.count++;
    }
    //Insere elemento em uma posicao especifica da lista
    insert(element: T, index: number) : boolean {
        if(index >= 0 && index < this.count) {
            const node = new Node(element);
            if(index === 0) {
                let current = this.head;
                this.head = node;
                node.next = current;
            } else {
                let previous = this.getElementAt(index -1);
                let current = previous?.next;
                if(previous != null) {
                    previous.next = node;
                }
                node.next = current;
            }
            this.count++;
            return true;
        }
        return false;
    }
    //Devolve o elemento que esta em uma posicao especifica da lista
    getElementAt(index: number) : Node<T> | undefined {
        if(index >= 0 && index < this.count) {
            let node = this.head;
            for(let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined
    }
    //Remove um elemento da lista
    remove(element: T) : void {
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    //Devolve o indice do elemento na lista
    indexOf(element: T) : number {
        let current = this.head;
        for(let i = 0; i < this.count && current != null; i++) {
            if(this.equalsFn(current, element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    //Remove um elemento em uma posicao especifica da lista
    removeAt(index: number) : Node<T> | undefined {
        if(index >= 0 && index < this.count) {
            let current = this.head;
            if(index === 0) {
                this.head = current?.next
            } else {
                let previous = this.getElementAt(index -1);
                current = previous?.next;
                if(previous != null) {
                    previous.next = current?.next;
                }
            }
            this.count--;
            return current;
        }
        return undefined;
    }
    //Verifica se a lista esta vazia
    isEmpty() : boolean {
        return this.count === 0;
    }
    //Devolve o numero de elementos na lista
    size() : number {
        return this.count;
    }

    toString() : string {
        if(this.isEmpty()) {
            return '';
        }
        let objectString = `${this.head}`;
        let current = this.head?.next;
        for(let i = 1; i < this.count && current != null; i++) {
            objectString = `${objectString}, ${current}`;
            current = current.next;
        }
        return objectString;
    }

}

export default LinkedList;