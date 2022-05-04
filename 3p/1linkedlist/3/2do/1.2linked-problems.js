/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * linked-list (stack/queue) implementation exercise
 *
 * zeeAlso edmodo
 */

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  get size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  contains(v) {
    let node = this.head;
    while (node != null && node.data != v) node = node.next;
    return node ? true : false;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  prepend(n) {
    n.next = this.head;
    this.head = n;
  }

  append(n) {
    let last = this.getLast();
    if (last) last.next = n;
    else this.head = n;
  }

  traverse(v) {
    let node = this.head;
    for (let i = 1; i < v; i++) {
      node = node.next;
    }
    return node;
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(list) {
    this.list = list;
    this.size = list.size;
  }

  enqueue(v) {
    this.list.append(v);
  }

  dequeue() {
    let secondToLast = this.list.traverse(this.size - 1);
    let last = secondToLast.next;
    secondToLast.next = null;
    return last;
  }

  toString() {
    let str = "";
    let node = this.front;
    let back = this.back;
    while (node) {
      str += `${node.data}${back == node ? "." : ", "}`;
      node = node.next;
    }
    return str;
  }

  empty() {
    this.list.clear();
  }

  get front() {
    return this.list.getFirst();
  }

  get back() {
    return this.list.getLast();
  }
}

let head = new ListNode(2);
let node1 = new ListNode(5);
head.next = node1;
let node2 = new ListNode("a");
node1.next = node2;
let list = new LinkedList(head);

let queue = new Queue(list);
queue.empty();
queue.enqueue(head);
console.log(queue.front);
queue.enqueue(new ListNode(6));
console.log(queue.front);
