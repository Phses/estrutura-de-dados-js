class Stack {
  private items: {[key: number]: number}
  private count: number
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: number): void {
    this.items[this.count] = element;
    this.count++
  }
  pop(): number | undefined {
    if(this.count == 0) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek(): any {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count -1];
  }
  isEmpty(): boolean {
    return this.count === 0;
  }
  size(): number {
    return this.count;
  }
  clear(): void {
    this.items = [];
  }
  toString(): string {
    if(this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for(let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}

export default Stack;