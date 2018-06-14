import LinkedListNode from './LinkedListNode';
import Comparator from '../utils/comparator/Comparator'

export default class LinkedList {

  /**
   * @param {Function} [comparatorFunc]
   */
  constructor(comparatorFunc) {

    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;
    this.compare = new Comparator(comparatorFunc);
  }

  /**
   * @param {*} value 
   * @returns {LinkList}
   */
  prepend(value) {
    // make newNode to be a head
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // if there is no tail yet let's make newNode a tail
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    
    // if there is no head (no tail either) yet let's make newNode to be a head and tail
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // attach newNode to the end of linked list
    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  delete(value) {
    if (!this.head) {
      // if not init, return null
      return null
    }

    let deleteNode

    while(this.head && this.compare.equal(this.head.value, value)) {
      // if head should be delete, delete it and move 2nd to 1st
      deleteNode = this.head
      this.head = this.head.next
    }
    
    let currentNode = this.head

    while(currentNode && currentNode.next) {
      if (this.compare.equal(currentNode.next.value, value)) {
        deleteNode = currentNode.next
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }
    
    return deleteNode
  }

  /**
   * @returns {LinkedListNode}
   */
  deleteTail() {
    const tail = this.tail
    if (this.head === this.tail) {
      this.head = this.tail = null
      return tail
    }

    let currentNode = this.head
    while(currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }
    this.tail = currentNode
    currentNode.next = null
    return tail
  }

  /**
   * @returns {LinkedListNode}
   */
  deleteHead() {
    const head = this.head
    if (!this.head) {
      return head
    }
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.tail = this.head = null
    }
    return head
  }

  find({ value = undefined, callback = undefined }) { 
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while(currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    
    return null
  }


  toArray() {
    const arr = []
    let currentNode = this.head
    while(currentNode) {
      arr.push(currentNode)
      currentNode = currentNode.next
    }
    return arr
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }
}
