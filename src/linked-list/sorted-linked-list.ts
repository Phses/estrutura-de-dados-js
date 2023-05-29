import { defaultEquals } from "../util/default-equals";
import LinkedList from "./linked-list";

const compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare<K> (a: K,b: K) {
    if(a === b) return 0;
    return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
}

class SortedLinkedList<T> extends LinkedList<T> {
    compareFn: Function
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare<T>) {
        super(equalsFn)
        this.compareFn = compareFn
    }

    insert(element: T, index: number = 0): boolean {
        if(this.isEmpty()) {
            return super.insert(element, 0);
        }
        let sortedIndex = this.getIndexNextSortedElement(element);
        return super.insert(element, sortedIndex);
    }

    getIndexNextSortedElement(element: T) : number {
        let current = this.head;
        let i = 0;
        for(; i < this.size() && current; i++) {
            let comp = this.compareFn(element, current);
            if(comp === compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i
    }
}

export default SortedLinkedList;