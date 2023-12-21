const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.firstElem = null;
    this.lastElem = null;
  }

  getUnderlyingList() {
    return this.firstElem;
  }

  enqueue(value) {
    const newElem = new ListNode(value);
    if (this.firstElem === null) {
      this.firstElem = newElem;
      this.lastElem = newElem;
    }
    else {
      this.lastElem.next = newElem;
      this.lastElem = newElem;
    }
  }

  dequeue() {
    if (this.firstElem === null) return;
    const returnValue = this.firstElem.value;
    this.firstElem = this.firstElem.next;
    if (this.firstElem === null) this.lastElem = null;
    return returnValue;
  }
}

module.exports = {
  Queue
};
