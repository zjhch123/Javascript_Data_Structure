import LinkedList from '../linked-list/LinkedList';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList())
    this.keys = {}
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    return Array.from(key).reduce((hashAcc, key) => (hashAcc + key.charCodeAt(0)), 0) % this.buckets.length
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const keyHash = this.hash(key)
    this.keys[key] = keyHash
    const entries = this.buckets[keyHash]
    const node = entries.find({callback: (node) => node.key === key})
    if (!node) {
      entries.append({key, value})
    } else {
      node.value.value = value
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {
    const keyHash = this.hash(key)
    delete this.keys[key]
    const entries = this.buckets[keyHash]
    const node = entries.find({callback: (node) => node.key === key})

    if (node) {
      return entries.delete(node)
    }

    return null
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const keyHash = this.keys[key]
    const entries = this.buckets[keyHash]
    if (!entries) {
      return undefined
    }
    const node = entries.find({callback: (node) => node.key === key})
    return node ? node.value.value : undefined
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return Object.keys(this.keys)
  }
}