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
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(v) {
    this.list.append(new ListNode(v));
  }

  dequeue() {
    let first = this.list.getFirst();
    if (first) {
      this.list.head = first.next;
      return first.data;
    }
    return null;
  }

  toString() {
    let str = "";
    let node = this.list.getFirst();
    let back = this.list.getLast();
    while (node) {
      str += `${node.data}${back == node ? "." : ", "}`;
      node = node.next;
    }
    return str ? str : null;
  }

  empty() {
    this.list.clear();
  }

  get front() {
    let first = this.list.getFirst();
    return first ? first.data : null;
  }

  get back() {
    return this.list.getLast();
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(v) {
    this.list.append(new ListNode(v));
  }

  pop() {
    if (this.list.size > 1) {
      let secondToLast = this.list.traverse(this.list.size - 1);
      let last = secondToLast.next;
      secondToLast.next = null;
      return last.data;
    } else if (this.peek()) {
      let data = this.peek();
      this.empty();
      return data;
    } else return null;
  }

  peek() {
    let last = this.list.getLast();
    return last ? last.data : null;
  }

  toString() {
    let str = "";
    let node = this.list.getFirst();
    let back = this.list.getLast();
    while (node) {
      str += `${node.data}${back == node ? "." : ", "}`;
      node = node.next;
    }
    return str ? str : null;
  }

  empty() {
    this.list.clear();
  }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(9);
console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.toString());

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
