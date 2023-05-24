export class Node<T> {
    element: T
    next: any
    constructor(element: T) {
        this.element = element
    }
}