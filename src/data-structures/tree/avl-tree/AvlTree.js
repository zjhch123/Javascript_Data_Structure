import BinarySearchTree from '../binary-search-tree/BinarySearchTree'
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
   * @param {BinarySearchTreeNode} node 
   */
  balance(node) {
    if (node.balanceFactor > 1) {
      if (node.left.balanceFactor > 0) {
        this.rotateLeftLeft(node)
      } else if (node.left.balanceFactor < 0) {
        this.rotateLeftRight(node)
      }
    } 
    if (node.balanceFactor < -1) {
      if (node.right.balanceFactor < 0) {
        this.rotateRightRight(node)
      } else if (node.right.balanceFactor > 0) {
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
    const left = rootNode.left
    rootNode.setLeft(null)

    const leftRight = left.right
    left.setRight(null)

    if (leftRight.left) {
      left.setRight(leftRight.left)
      leftRight.setLeft(null)
    }

    rootNode.setLeft(leftRight)
    leftRight.setLeft(left)

    this.rotateLeftLeft(rootNode)
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight(rootNode) {
    const right = rootNode.right
    rootNode.setRight(null)

    if (rootNode.parent) {
      rootNode.parent.setRight(right)
    } else if (rootNode === this.root) {
      this.root = right
    }

    if (right.left) {
      rootNode.setRight(right.left)
    }

    right.setLeft(rootNode)
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft(rootNode) {
    const right = rootNode.right
    rootNode.setRight(null)
    const rightLeft = right.left
    right.setLeft(null)

    if (rightLeft.right) {
      right.setLeft(rightLeft.right)
      rightLeft.setRight(null)
    }

    rootNode.setRight(rightLeft)
    rightLeft.setRight(right)

    this.rotateRightRight(rootNode)
  }
}