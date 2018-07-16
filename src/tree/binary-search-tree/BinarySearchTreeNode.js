import BinaryTreeNode from '../BinaryTreeNode.js'
import Comparator from '../../utils/comparator/Comparator';


export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null, compareFunction = null) {
    super(value)
    this.compareFunction = compareFunction
    this.nodeValueComparator = new Comparator(compareFunction)
  }

  insert(value) {
    if (this.nodeValueComparator.equal(this.value, null)) {
      this.value = value
      return this
    }

    if (this.nodeValueComparator.lessThan(value, this.value)) {
      if (this.left) {
        return this.left.insert(value)
      }
      const newNode = new BinarySearchTreeNode(value, this.compareFunction)
      this.setLeft(newNode)
      return newNode
    }

    if (this.nodeValueComparator.greaterThan(value, this.value)) {
      if (this.right) {
        return this.right.insert(value)
      }
      const newNode = new BinarySearchTreeNode(value, this.compareFunction)
      this.setRight(newNode)
      return newNode
    }

    return this
  }

  

}