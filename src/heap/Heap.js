import Comparator from '../utils/comparator/Comparator';

export default class Heap {
  constructor(comparatorFunc) {
    this.heapContainer = []
    this.compare = new Comparator(comparatorFunc)
  }

  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1
  }

  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  hasLeftChild(childIndex) {
    return this.getLeftChildIndex(childIndex) < this.heapContainer.length
  }

  hasRightChild(childIndex) {
    return this.getRightChildIndex(childIndex) < this.heapContainer.length
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexOne]
    this.heapContainer[indexOne] = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = tmp
  }

  peek() {
    if (this.heapContainer.length === 0)  {
      return null
    }
    return this.heapContainer[0]
  }

  poll() {
    if (this.heapContainer.length === 0)  {
      return null
    }
    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop()
    }

    const item = this.heapContainer[0]

    this.heapContainer[0] = this.heapContainer.pop()
    this.heapifyDown()

    return item
  }

  




  heapifyDown() {
    // TODO
  }

}
