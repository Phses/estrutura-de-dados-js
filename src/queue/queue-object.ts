
class Queue<T> {
    count: number
    lowestCount: number
    items: {[key: number]: T}

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    add(element: T) : void {
        this.items[this.count] = element;
        this.count++;
    }

    remove() : T | undefined{
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    isEmpty() : boolean {
        return this.count - this.lowestCount === 0;
    }

    peek() : T | undefined {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    size() : number {
        return this.count - this.lowestCount;
    }

    clear() : void {       
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    toString() : string {
        if(this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.size(); i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

export default Queue;