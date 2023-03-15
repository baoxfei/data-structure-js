class Stack {
  constructor() {
    this.stack = []
    // 疑问 为什么要存在count
    // 保证顺序性
    this.count = 0;
  }
  /**
   * 入栈
   */
  push(element) {
    this.stack[this.count] = element
    this.count ++;
  }
  /**
   * 栈顶 出栈
   */
  pop() {
    if (this.isEmpty()) return undefined
    this.count --
    const item = this.stack[this.count]
    delete this.stack[this.count]
    return item
  }
  /**
   * 预览 栈顶
   */
  peek() {
    if (this.isEmpty()) return undefined
    const item = this.stack[this.count - 1]
    return item
  }
  /**
   * isEmpty
   */
  isEmpty() {
    return this.count === 0
  }
  /**
   * size
   */
  size() {
    return this.count
  }
  /**
   * clear
   */
  clear() {
    this.stack = [];
    this.count = 0;
  }
  /**
   * 字符化
   */
  toString() {
    const length = this.count;
    let s = ''
    this.stack.forEach((n) => {
      s = `${s},${n}`
    })
    return s
  }
}

export default Stack;