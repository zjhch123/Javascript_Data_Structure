import BinarySearchTreeNode from './BinarySearchTreeNode'

export default class BinarySearchTree {
  constructor(nodeValueCompareFunction) {
    this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction)

    this.nodeComparator = nodeValueCompareFunction
  }

  insert(value) {
    return this.root.insert(value)
  }

  toString() {
    return this.root.toString()
  }

  remove(value) {
    return this.root.remove(value);
  }

  contains(value) {
    return this.root.contains(value);
  }
}