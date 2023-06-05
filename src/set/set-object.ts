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

  union(otherSet: Set<T>): Set<T> {
    let unionSet: Set<T> = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet: Set<T>): Set<T> {
    let intersectionSet : Set<T> = new Set<T>();
    const values: T[] = this.values();
    const otherValues: T[] = otherSet.values();
    let biggerSet = values
    let smallestSet = otherValues;
    if(otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallestSet = values;
    }
    smallestSet.forEach(value => {
      if(biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    })
    return intersectionSet;
  }
  difference(otherSet: Set<T>): Set<T> {
    const differenceSet: Set<T> = new Set<T>();
    this.values().forEach(value => {
      if(!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  isSubsetOf(otherSet: Set<T>): boolean {
    if(this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if(!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

export default Set;