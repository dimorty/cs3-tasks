class Node {
  constructor(value = null) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = new Node();
    this.last = new Node();
  }

  popLeft() {
    if (this.first.value !== null) {
      this.first = this.first.next;
      this.first.prev = null;
    }
  }

  popRight() {
    if (this.first.value !== null) {
      this.last = this.last.prev;
      this.last.next = null;
    }
  }

  pushLeft(val) {
    const node = new Node(val);
    if (this.first.value === null) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first.prev = node;
      this.first = node;
    }
  }

  pushRight(val) {
    const node = new Node(val);
    if (this.first.value === null) {
      this.first = node;
      this.last = node;
    } else {
      node.prev = this.last;
      this.last.next = node;
      this.last = node;
    }
  }

  [Symbol.iterator]() {
    this.current = this.first;
    return this;
  }

  next() {
    if (this.current) {
      let value = this.current.value;
      this.current = this.current.next;
      return { value, done: false };
    }
    return { done: true };
  }
}

const list = new LinkedList();

list.pushRight(1);
list.pushRight(2);
list.pushRight(3);
list.pushLeft(4);
list.pushLeft(5);
list.pushLeft(6);
list.popLeft();
list.popRight();

console.log(list);
// console.log(list.first.value); // 1
// console.log(list.last.value); // 3
// console.log(list.first.next.value); // 2
// console.log(list.first.next.prev.value); // 1

for (const value of list) {
  console.log(value);
}
