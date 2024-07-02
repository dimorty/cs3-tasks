class Dequeue {
  #view;
  #data;

  constructor(view, capacity) {
    this.#view = view;
    this.buffer = new ArrayBuffer(capacity);
    this.#data = new this.#view(this.buffer);
    this.right = Math.floor(capacity / 2 - 1);
    this.left = this.right;
    this.length = 0;
  }

  pushLeft(el) {
    if (this.length !== 0) {
      this.left--;
    }
    this.#data[this.left] = el;
    this.length++;
    return this.length;
  }

  pushRight(el) {
    if (this.length !== 0) {
      this.right++;
    }
    this.#data[this.right] = el;
    this.length++;
    return this.length;
  }

  popLeft() {
    let elem = this.#data[this.left];
    this.#data[this.left] = 0;
    if (this.length !== 0) {
      this.left++;
      this.length--;
    }
    return elem;
  }

  popRight() {
    let elem = this.#data[this.right];
    this.#data[this.right] = 0;
    if (this.length !== 0) {
      this.right--;
      this.length--;
    }
    return elem;
  }

  getHead() {
    return this.#data[this.right];
  }

  getTail() {
    return this.#data[this.left];
  }
}

const dequeue = new Dequeue(Uint8Array, 64);

dequeue.pushRight(1); // Возвращает длину - 1
dequeue.pushRight(2); // 2
dequeue.pushRight(3); // 3

console.log(dequeue.length);

dequeue.popRight();
console.log(dequeue.length);

dequeue.pushLeft(4);
dequeue.pushLeft(5);
dequeue.pushLeft(6);

dequeue.popLeft();

console.log(dequeue.length);

console.log(dequeue.buffer);
