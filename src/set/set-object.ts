class Set<T> {
  items: {[key: string]: T}
  constructor() {
    this.items = {}
  }
  add(element: T): boolean {
    if(!this.has(element)) {
      let key = this.getKey(element);
      this.items[key] = element;
      return true;
    }
    return false;
  }
  delete(element: T): boolean {
    if(this.has(element)) {
      let key = this.getKey(element);
      delete this.items[key];
      return true;
    }
    return false;
  }
  has(element: T): boolean {
    const key = this.getKey(element);
    return Object.prototype.hasOwnProperty.call(this.items, key);
  }
  getKey(element: T) : string {
    return JSON.stringify(element);
  }
  clear(): void {
    this.items = {};
  }
  size(): number {
    let count = 0;
    for(let key in this.items) {
      if(this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  values(): Array<T> {
    return Object.values(this.items);
  }
}

export default Set;