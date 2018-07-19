import BinarySearchTree from '../binary-search-tree/BinarySearchTreeNode'
import BinarySearchTreeNode from '../binary-search-tree/BinarySearchTreeNode';

export default class AvlTree extends BinarySearchTree {
  insert(value) {
    super.insert(value)

    let currentNode = this.root.find(value)
    while (currentNode) {
      this.balance(currentNode) // 平衡
      currentNode = currentNode.parent // 继续向上级节点平衡
    }
  }

  remove(value) {
    throw new Error(`Can't remove ${value}. Remove method is not implemented yet`);
  }

  /**
   * 
   * @param {BinarySearchTreeNode} node 
   */
  balance(node) {
    if (node.balanceFactor > 1) {
      if (node.left.balanceFactor > 0) {
        this.rotateLeftLeft(node)
      } else {
        this.rotateLeftRight(node)
      }
    } 
    if (node.balanceFactor < -1) {
      if (node.left.balanceFactor < 0) {
        this.rotateRightRight(node)
      } else {
        this.rotateRightLeft(node)
      }
    }
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftLeft(rootNode) {
    const left = rootNode.left
    rootNode.setLeft(null)
    
    if (rootNode.parent) {
      rootNode.parent.setLeft(left)
    } else if(rootNode === this.root){
      this.root = left
    }

    if (left.right) {
      rootNode.setLeft(left.right)
    }
    left.setRight(rootNode)
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftRight(rootNode) {

  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight(rootNode) {

  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft(rootNode) {

  }


}