const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.myRoot = null;
  }

  root() {
    return this.myRoot;
  }

  add(data) {
    const newData = new Node(data);
    if (this.myRoot === null) this.myRoot = newData;
    else this.addNew(newData, this.myRoot);
  }

  addNew(newData, node) {
    if (newData.data > node.data) {
        if (node.right === null) node.right = newData;
        else this.addNew(newData, node.right);
    }
    else {
        if (node.left === null) node.left = newData;
        else this.addNew(newData, node.left);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this.findData(data, this.myRoot);
  }

  findData(data, node) {
    if (node.data === data) {
        return node;
    }
    if (data > node.data) {
      if (node.right === null) return null;
      else return this.findData(data, node.right);
    }
    else {
      if (node.left === null) return null;
      else return this.findData(data, node.left);
    }
  }

  remove(data) {
    if (!this.has(data)) return;
    this.myRoot = this.removeData(data, this.myRoot);
    return;
  }

  removeData(data, node) {
    if (node === null) return null;
    else if (data < node.data) {
      node.left = this.removeData(data, node.left);
      return node;
    }
    else if (data > node.data) {
      node.right = this.removeData(data, node.right);
      return node;
    }
    else {
      if (node.right === null && node.left === null) return node = null;
      if (node.right === null) return node = node.left;
      else if (node.left === null) return node = node.right;
      node.data = this.findMin(node.right);
      node.right = this.removeData(this.findMin(node.right), node.right);
      return node;
    }
  }

  min() {
    return this.findMin(this.myRoot);
  }

  max() {
    return this.findMax(this.myRoot);
  }

  findMin(node) {
    if (node.left === null) return node.data;
    else return this.findMin(node.left);
  }

  findMax(node) {
    if (node.right === null) return node.data;
    else return this.findMax(node.right);
  }
}

module.exports = {
  BinarySearchTree
};