export default class ValuePair<K, M> {
  constructor(public key: K, public value: M){}
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}