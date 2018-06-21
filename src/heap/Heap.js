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

  add(item) {
    this.heapContainer.push(item)
    this.heapifyUp()

    return this
  }

  remove(item, customFindingComparator) {
    const compare = customFindingComparator || this.compare
    const numberOfItemsToRemove = this.find(item, compare).length

    for(let iteration = 0; iteration < numberOfItemsToRemove; iteration ++) {
      const indexToMove = this.find(item, compare).pop()
      if (indexToMove === this.heapContainer.length - 1) {
        this.heapContainer.pop()
      } else {
        this.heapContainer[indexToMove] = this.heapContainer.pop()

        const parentItem = this.hasParent(indexToMove) ? this.parent(indexToMove) : null
        const leftChild = this.hasLeftChild(indexToMove) ? this.leftChild(indexToMove) : null

        if (
          leftChild !== null &&
          (
            parentItem === null ||
            this.compare.lessThan(parentItem, this.heapContainer[indexToMove])
          )
        ) {
          this.heapifyDown(indexToMove)
        } else {
          this.heapifyUp(indexToMove)
        }
      }
    }
    return this
  }

  find(item, customComparator) {
    const foundItemIndices = []
    const compare = customComparator || this.compare

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex ++) {
      if (compare.equal(this.heapContainer[itemIndex], item)) {
        foundItemIndices.push(itemIndex)
      }
    }

    return foundItemIndices
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex) &&
      this.compare.lessThan(this.heapContainer[currentIndex], this.parent(currentIndex))
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex) {
    let currentIndex = customStartIndex || 0
    let nextIndex = null

    while(this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) && 
        this.compare.lessThan(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex)
      }

      if (this.compare.lessThan(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break
      }

      this.swap(currentIndex, nextIndex)
      currentIndex = nextIndex
    }
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  toString() {
    return this.heapContainer.map(item => item.toString()).join(',')   
  }
}

// for(let i = 0; i < 10; i++) {
//   const a = new Heap()
//   for(let j = 0; j < 10; j++) {
//     a.add(Math.floor(Math.random() * 10))
//   }
//   console.log(a.toString())
// }