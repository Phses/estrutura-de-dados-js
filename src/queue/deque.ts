class Deque<T> {
    private items: {[key: number]: T};
    private count: number;
    private lowestCount: number;

    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    addFront(element: T): void {
        if(this.count == 0) {
            this.addBack(element);
        } else if(this.lowestCount > 0) {
            this.items[this.lowestCount -1] = element;
        } else {
            for(let i = this.count; i >= this.lowestCount; i--) {
                this.items[i + 1] = this.items[i]; 
            }
            this.items[this.lowestCount] = element;
            this.count++;
        }
    }
    addBack(element: T): void {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront(): T | undefined {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result
    }
    removeBack(): T | undefined {
        if(this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }
    peekFront(): T | undefined {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekBack(): T | undefined {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count -1];
    }
    isEmpty(): boolean {
        return this.count - this.lowestCount == 0
    }
    clear(): void {
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }
    size(): number {
        return this.count - this.lowestCount;
    }
    toString(): string{
        if(this.isEmpty()) {
            return ""
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }
}

export default Deque;