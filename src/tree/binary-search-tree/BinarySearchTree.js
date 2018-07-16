import BinarySearchTreeNode from './BinarySearchTreeNode.js'

export default class BinarySearchTree {
  constructor(nodeValueCompareFunction) {
    this.root = new BinarySearchTreeNode()

    this.nodeComparator = nodeValueCompareFunction
  }

  insert(value) {
    return this.root.insert(value)
  }

  toString() {
    return this.root.toString()
  }
}