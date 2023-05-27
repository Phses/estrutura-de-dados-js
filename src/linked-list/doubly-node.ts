import { Node } from "./node";

export class DoublyNode<T> extends Node<T> {
    prev: DoublyNode<T> | undefined
    constructor(element: T) {
        super(element);
    }
}