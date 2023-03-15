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
import  Node, { DoublyNode } from './utils/node'
import defaultCompare, { Compare } from './utils/compare'

const defaultEquals = <T>(a: T, b: T): boolean => {
  return a === b
}

type IEqualsFunction<T> = (a: T, b: T) => boolean;

/**
 * 链表
 */
class LinkedList<T> {
  protected head: Node<T> | undefined;
  protected count: number;
  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) {
    this.count = 0;
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
      return currentNode
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


/**
 * 循环链表
 */
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
      const pre = this.getElementAt(this.count - 1)!
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
        this.head = undefined
      } else {
        const removed = this.head;
        current = this.getElementAt(this.size() - 1);
        this.head = this.head?.next;
        current.next = this.head;
        current = removed;
      }
    } else {
      const previous = this.getElementAt(index - 1)!
      current = previous.next
      previous.next = current.next
    }
    this.count --
    return current.element
  }

  insert(index: number, element: T): boolean {
    const node = new Node(element);
    if (index === 0) {
      if (this.size() === 0) {
        this.head = node
        this.head.next = this.head
      } else {
        const pre = this.getElementAt(this.size() - 1)!
        pre.next = node
        node.next = this.head;
        this.head = node;
      }
      this.count ++
      return true
    } else if (index <= this.size() && index > 0) {
      const pre = this.getElementAt(index - 1)!
      node.next = pre.next;
      pre.next = node;
      this.count ++
      return true
    } else {
      return false
    }
  }

}

/**
 * 有序链表
 */
class SortLinkedList<T> extends LinkedList<T> {
  constructor(protected equals = defaultEquals, protected compare = defaultCompare) {
    super(equals)
  }
  push(element: T) {
    if (this.isEmpty()) {
      super.push(element)
    } else {
      // 之前的思路 比较 当前值和下一个值是否在他俩之间  有序数列 直接比较当前第一个比他大的值就行
      const index = this.getSortIndex(element)
      super.insert(index, element)
      // const node = this.getElementAt(index - 1)!
      // const newNode = new Node(element)
      // newNode.next = node.next
      // node.next = newNode
      // this.count ++
    }
  }

  insert(index: number, element: T,) {
    if (index === 0) {
      return super.insert(0, element)
    } else {
      index = this.getSortIndex(element)
      return super.insert(index, element)
    }
  }

  private getSortIndex(element: T) {
    let current = this.head;
    let index = 0
    for (; index < this.size(); index++) {
      if (this.compare(current!.element, element) === Compare.LESS_THAN) {
        return index
      }
      current = current?.next
    }
    return index
  }
}

/**
 * 双指针
 */

class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | undefined;
  protected tail: DoublyNode<T> | undefined;
  constructor() { super() }
  push(element: T) {
    const node = new DoublyNode(element)
    if (this.size() === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node
      node.prev = this.tail;
      this.tail = node
    }
    this.count ++
  }
  insert(index: number, element: T): boolean {
   if (index < this.size() && index >= 0) {
    const node = new DoublyNode(element)
    if (index === 0) {
      node.next = this.head;
      this.head!.prev = node
      this.head = node;
    } else {
      const prev = this.getElementAt(index -1)
      node.next = prev?.next
      prev!.next.prev = node;
      prev!.next = node
      node.prev = prev
    }
    this.count ++
    return true
   }
   return false
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.size()) {
      let current;
      if (index === 0) {
          this.head = this.head!.next
          this.head!.prev = undefined
      } else {
        const prev = this.getElementAt(index - 1)
        current = prev?.next
        prev!.next = prev?.next.next

      }

      this.count --;
      return current.element
    }
    return undefined
  }
}


export { CircularLinkedList, SortLinkedList, DoublyLinkedList,  }

export default LinkedList