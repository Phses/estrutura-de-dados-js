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
    push(element: T) {
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
    insert(element, position)
    //Devolve o elemento que esta em uma posicao especifica da lista
    getElementAt(index)
    //Remove um elemento da lista
    remove(element)
    //Devolve o indice do elemento na lista
    indexOf(element)
    //Remove um elemento em uma posicao especifica da lista
    removeAt(position)
    //Verifica se a lista esta vazia
    isEmpty()
    //Devolve o numero de elementos na lista
    Size()

}

export default LinkedList;