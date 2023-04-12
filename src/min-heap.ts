import { Compare, defaultCompare, ICompareFunction, reverseCompare, swap } from './utils';


class MinHeap<T> {
  protected heap: T[] = []
  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  private getLeftChildIndex(index: number) {
    return 2 * index + 1
  }

  private getRightChildIndex(index: number) {
    return 2 * index + 2
  }

  private getParentIndex(index: number) {
    if (index === 0) {
      return undefined
    }
    return Math.floor((index - 1) / 2)
  }

  size() {
    return this.heap.length;
  }

  clear() {
    this.heap = []
  }

  isEmpty() {
    return this.size() === 0
  }

  findMinmum() {
    return this.isEmpty() ? 0 : this.heap[0]
  }

  private shiftup(index) {
    let parentIndex = this.getParentIndex(index)!
    while(index > 0 && this.compareFn(this.heap[index], this.heap[parentIndex]) === Compare.LESS_THAN) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      index = parentIndex;
      parentIndex = this.getParentIndex(parentIndex)!
    }
  }

  insert(value) {
    if (value != null) {
      const length = this.heap.length;
      this.heap.push(value)
      this.shiftup(length)
      return true
    }
    return false
  }
  private shiftDown(index) {
    let element = index;
    const left = this.getLeftChildIndex(index)
    const right = this.getRightChildIndex(index);
    const size = this.size();
    while(left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
      element = left
    }

    while(right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
      element = right;
    }

    while(element !== index) {
      swap(this.heap, element, index)
      this.shiftDown(element)
    }
  }
  extract(index) {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 0) {
      return this.heap.unshift();
    }
    const removeValue = this.heap[0]
    this.heap[0] = this.heap.pop()!;
    this.shiftDown(0);
    return removeValue
  }
  heapify(array: T[]) {
    if (array) {
      this.heap = array
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for(let i = 0; i <= maxIndex; i ++) {
      this.shiftDown(i)
    }
    return this.heap;
  }
}


class MaxHeap<T> extends MinHeap<T> {
  constructor(protected compare = defaultCompare) {
    super(compare)
    this.compare = reverseCompare(compare)
  }
}

export {
  MinHeap,
  MaxHeap
};