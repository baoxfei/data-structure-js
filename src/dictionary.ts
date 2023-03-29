import { ValuePair, defaultToString } from './utils'

/**
 * get
 * set
 * hasKey
 * remove
 * values
 * keys
 * keyValues
 * forEach
 * isEmpty
 * size
 * clear
 * toString
 */

class Dictionary<K, V> {
  public table
  constructor(public toStrFn: (key: K) => string = defaultToString) {
    this.table = {}
  }
  set(key: K, value: V) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  get(key: K) {
    if (key != null) {
      const tableKey = this.toStrFn(key)
      return this.table[key]
    }
    return undefined
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  clear() {
    this.table = {}
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
  keys() {
    return this.keysValues().map((n) => n.key)
  }

  values() {
    return this.keysValues().map((n) => n.value)
  }

  keysValues(): ValuePair<K, V>[] {
    return Object.values(this.table)
  }
  forEach(callbackFn: (key: K, value: V) => any) {
    const dataSource = this.keysValues();
    for(let i = 0; i < dataSource.length; i ++) {
      const { key, value } = dataSource[i];
      const result = callbackFn(key, value)
      if (result === false) {
        break
      }
    }
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keysValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

export default Dictionary