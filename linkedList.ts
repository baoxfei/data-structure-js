/**
 * head
 * insert
 * getelementat
 * size
 * empty
 * remove
 * removeAt
 * getHead
 * toString
 * clear
 * push
 */
// import { defaultEquals, IEqualsFunction } from '../util';
import  Node from './node'

const defaultEquals = <T>(a: T, b: T): boolean => {
  return a === b
}

type IEqualsFunction<T> = (a: T, b: T) => boolean;


class LinkedList<T> {
  protected head: Node<T> | undefined | null;
  protected count: number;
  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    this.equalsFn = equalsFn
  }
  push(element: T) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while(current?.next) {
        current = current.next
      }
      current!.next = node
    }
    this.count ++
  }
  insert(index: number, element: T) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head
        this.head = node
      } else {
        const pre = this.getElementAt(index - 1)
        node.next = pre?.next
        pre!.next = node
      }
      this.count ++
      return true
    }
    return false
  }
  getElementAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = 0;
      let currentNode = this.head;
      while(current !== index && currentNode) {
        current ++
        currentNode = currentNode?.next
      }
      return currentNode?.element
    }
    return undefined
  }
  removeAt(index: number) {
    if (index < 0 || index >= this.count) return;
    const node = this.getElementAt(index - 1)
    const removeNode = node!.next
    node!.next = removeNode?.next
    return removeNode
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  clear() {
    this.head = undefined
    this.count = 0
  }
  indexOf(element: T) {
    let current = this.head;
    for(let i = 0; i < this.size(); i ++) {
      if (this.equalsFn(current?.element, element)) {
        return i
      }
      current = current?.next
    }
    return -1
  }
}



class CircularLinkedList<T> extends LinkedList<T> {
  constructor(equalsFn) {
    super(equalsFn)
  }
  push(element: T) {
    const node = new Node(element)
    if (this.count = 0) {
      this.head = node
      node.next = this.head
    } else {
      const pre = this.getElementAt(this.count - 1)
      pre.next = node
      node.next = this.head
      this.count++
    }
  }
  removeAt(index: number) {
    // let pre: Node<any> | null = null
    // // 没有考虑 this.heads
    // if (index === 0) {
    //   // remove index 0
    //   pre = this.getElementAt(this.count - 1)
    // } else {
    //   pre = this.getElementAt(index - 1)
    // }
    // const element = pre?.next.element
    // if (pre) {
    //   pre.next = pre.next.next
    // }
    // return element
    let current
    if (index === 0) {
      if (this.size() === 0) {
        this.head = null
      } else {
        const removed = this.head;
        current = this.getElementAt(this.size() - 1);
        this.head = this.head?.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count --
    return current.element
  }

  insert(index: number, element: T): boolean {
    
  }

}


export default LinkedList