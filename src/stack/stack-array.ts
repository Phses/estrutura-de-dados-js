class Stack {
  private items: number[]
  constructor() {
    this.items = [];
  }

  push(element: number): void {
    this.items.push(element);
  }
  pop(): any {
    return this.items.pop();
  }
  peek(): number {
    return this.items[this.items.length -1];
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  size(): number {
    return this.items.length;
  }
  clear(): void {
    this.items = [];
  }
}

export default Stack;