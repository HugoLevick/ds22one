/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * array-based implementation of trees
 *
 * write it and make sure it runs
 */

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  toString() {
    let str = `${this.data} => `;
    this.children.forEach((child) => {
      str += child.data + " ";
    });
    return str;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) {
      parent.children.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "error";
      }
    }
  }

  findBFS(data) {
    let _node = null;

    this.traverseBFS((node) => {
      if (node.data == data) {
        _node = node;
      }
    });
    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        cb(node);

        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
}

let tree = new Tree();
tree.add("1"); // Add node
tree.add("2", "1"); // Add node and its parent tree.add(data, parent)
tree.add("3", "1");
tree.add("4", "1");
tree.add("5", "2");
tree.add("6", "2");
tree.add("7", "3");
tree.traverseBFS((node) => console.log(node.toString())); //Prints each node and its children
