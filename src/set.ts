export default class Set<T> {
  public items
  constructor() {
    this.items = {}
  }
  add(element: T) {
    if (this.items.has(element)) {
      return false
    }
    this.items[element] = element;
    return true
  }
  has(element: T) {
    return Object.prototype.hasOwnProperty.call(this.items, element as string) 
  }
  delete(element: T) {
    if (this.items.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  } 
  values(): T[] {
    return Object.values(this.items)
  }
  union(otherSet: Set<T>) {
    const newSet = new Set();
    this.values().forEach(n => newSet.add(n))
    otherSet.values().forEach(n => {
      if (!newSet.has(n)) {
        newSet.add(n)
      }
    })
    return newSet
  }
  intersection(otherSet: Set<T>) {
    const intersectionSet = new Set<T>();

    const values = this.values();
    const otherValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }
  // 非otherSet的元素
  difference(otherSet: Set<T>) {
    const newSet = new Set();
    this.values().forEach((n) => {
      if (!otherSet.has(n)) {
        newSet.add(n)
      }
    })
    return newSet
  }
  // 是否otherSet的子集
  isSubsetOf(otherSet: Set<T>) {
    if (this.size() > otherSet.size()) {
      return false
    }
    const values = otherSet.values()
    return this.values().every((n) => values.includes(n))
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i]?.toString()}`;
    }
    return objString;
  }
}
