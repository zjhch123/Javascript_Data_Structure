import Heap from '../heap/Heap'
import Comparator from '../utils/comparator/Comparator'

export default class PriorityQueue extends Heap {
  constructor() {
    super()
    this.priorities = {}
    this.compare = new Comparator(this.comparePriority.bind(this))
  }

  add(item, priority = 0) {
    this.priorities[item] = priority
    super.add(item)
    return this
  }

  remove(item, customFindingComparatorFunc) {
    super.remove(item, customFindingComparatorFunc)
    delete this.priorities[item]

    return this
  }

  changePriority(item, newPriority) {
    this.remove(item, new Comparator(this.compareValue.bind(this)))
    this.add(item, newPriority)
    return this
  }

  findByValue(item) {
    return super.find(item, new Comparator(this.compareValue.bind(this)))
  }

  hasValue(item) {
    return this.findByValue(item).length > 0
  }

  comparePriority(a, b) {
    if (this.priorities[a] === this.priorities[b]) {
      return 0
    }
    return this.priorities[a] > this.priorities[b] ? 1 : -1
  }

  compareValue(a, b) {
    if (a === b) {
      return 0
    }
    return a > b ? 1 : -1
  }
}

const a = new PriorityQueue()