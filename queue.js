class Queue {
  constructor() {
    this.queue = []
    this.count = 0;
    this.lowerCount = 0;
  }
  /**
   * 入队列
   */
   enqueue(element) {
    this.queue[this.count] = element;
    this.count ++
  }
  /**
   * 出队列
   */
   denqueue() {
    if (this.isEmpty()) return undefined
    const item = this.queue[this.lowerCount]
    delete this.queue[this.lowerCount]
    this.lowerCount ++
    return item
  }
  /**
   * 预览 
   */
  peek() {
    if (this.isEmpty()) return undefined
    const item = this.queue[this.lowerCount]
    return item
  }
  /**
   * isEmpty
   */
  isEmpty() {
    return this.size() === 0
  }
  /**
   * size
   */
  size() {
    return this.count - this.lowerCount
  }
  /**
   * clear
   */
  clear() {
    this.queue = [];
    this.count = 0;
    this.lowerCount = 0
  }
  /**
   * 字符化
   */
  toString() {
    let s = ''
    for (let index = this.lowerCount; index < this.count; index++) {
      const element = array[index];
      s = `${s},${element}`
    }
    return s
  }
}

export default Queue;