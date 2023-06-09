import { defaultEquals } from "../util/default-equals";
import { DoublyNode } from "./doubly-node";
import LinkedList from "./linked-list";

class DoublyLinkedList<T> extends LinkedList<T> {
    tail : DoublyNode<T> | undefined
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    get doublyHead(): DoublyNode<T> | undefined {
        return this.head as DoublyNode<T> | undefined;
    }
    
    set doublyHead(node: DoublyNode<T> | undefined) {
        this.head = node;
    }

    insert(element: T, index: number): boolean {
        if(index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            if(index === 0) {
                if(this.doublyHead == null) {
                    this.doublyHead = node;
                    this.tail = node;
                } else {
                    let current = this.doublyHead;
                    this.doublyHead = node;
                    this.doublyHead.next = current;
                    current.prev = this.doublyHead;
                }
            } else {
                if(index === this.count) {
                    let current = this.tail;
                    this.tail = node;
                    this.tail.prev = current;
                    if(current != null) {
                        current.next = this.tail;
                    }
                } else {
                    let previous  = this.getElementAt(index -1) as DoublyNode<T>;
                    let current = previous?.next as DoublyNode<T>;
                    node.next = current;
                    if(previous != null) {
                        previous.next = node;
                    }
                    node.prev = previous;
                    current.prev = node;
                }
            }
            this.count++
            return true;
        }
        return false;
    }

    removeAt(index: number): DoublyNode<T> | undefined {
        if(index >= 0 && index <= this.count) {
            let current = undefined;
            if(index === 0) {
                current = this.doublyHead;
                this.doublyHead = current?.next as DoublyNode<T>;
                if(this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.doublyHead.prev = undefined;
                }
            } else if(index === this.count -1) {
                current = this.tail;
                this.tail = current?.prev;
                if(this.tail != null) {
                    this.tail.next = undefined
                }
            } else {
                current = this.getElementAt(index) as DoublyNode<T>;
                let previous = current.prev;
                let next = current.next as DoublyNode<T>;
                if(previous != null) {
                    previous.next = next
                }
                if(next != null) {
                    next.prev = previous
                }
            }
            this.count--;
            return current
        }
        return undefined
    }

}

export default DoublyLinkedList;