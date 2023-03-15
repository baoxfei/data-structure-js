
import { compare } from '@/utils'

class BinaryNode<K> {
  left: BinaryNode<K>;
  right: BinaryNode<K>;
  constructor(public key: K){}
  toString() {
    return `${this.key}`
  }
}
/**
 * insert
 * getRoot
 * search
 * inOrderTraverse
 * preOrderTraverse
 * postOrderTraverse
 * min
 * max
 */
class BinarySearchTree<K> {
  protected root: BinaryNode<K>
  constructor(protected compare) {
    this.compare = compare
  }

  insert(key: K) {
    if (this.root === null) {
      this.root = new BinaryNode(key)
    } else {
      this.insertNode(key, this.root)
    }
  }

  private insertNode(newKey: K, node: BinaryNode<K>) {
    const { left, right, key } = node;
    if (newKey <= key) {
      if (left == null) {
        node.left = new BinaryNode(newKey)
      } else {
        this.insertNode(newKey, node.left)
      }
    } else {
      if (right == null) {
        node.right = new BinaryNode(newKey)
      } else {
        this.insertNode(newKey, node.right)
      }
    }
  }
  getRoot() {
    return this.root
  }

  search(newKey: K) {
    return this.searchNode(newKey, this.root)
  }

  private searchNode(newKey:K, node) {
    const { left, right, key } = node;
    if (key === newKey) return node
    if (newKey > key) return this.searchNode(newKey, left)
    if (newKey < key) return this.searchNode(newKey, right)
    return undefined;
  }

  inOrderTraverse(node: BinaryNode<K>, callback) {
    if (node) {
      callback(node.left)
      callback(node)
      callback(node.right)
    }
  }
  preOrderTraverse(node: BinaryNode<K>, callback) {
    if (node) {
      callback(node)
      callback(node.left)
      callback(node.right)
    }
  }
  postOrderTraverse(node: BinaryNode<K>, callback) {
    if (node) {
      callback(node.left)
      callback(node.right)
      callback(node)
    }
  }
  min() {
    let min = 0;
    const getMin = (node) => {
      min = Math.min(min, node.key)
    }
    this.inOrderTraverse(this.root, getMin)
  }

  max() {
    let max = 0;
    const getMax = (node) => {
      max = Math.max(max, node.key)
    }
    this.inOrderTraverse(this.root, getMax)
  }
}