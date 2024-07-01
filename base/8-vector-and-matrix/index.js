class Vector {
  #view;
  #data;
  #CAP_INDEX = 2;
  #BYTES;

  constructor(view, capacity) {
    this.#view = view;
    this.#BYTES = this.#view.BYTES_PER_ELEMENT;
    this.capacity = capacity;
    this.length = 0;
    this.buffer = new ArrayBuffer(capacity * this.#BYTES);
    this.#data = new this.#view(this.buffer);
  }

  #realloc(type) {
    let oldBuffer = this.#data;
    this.capacity =
      type === "up"
        ? this.capacity * this.#CAP_INDEX
        : this.capacity / this.#CAP_INDEX;
    this.buffer = new ArrayBuffer(this.capacity * this.#BYTES);
    this.#data = new this.#view(this.buffer);
    for (let i = 0; i < this.length; i++) {
      this.#data[i] = oldBuffer[i];
    }
  }

  push(el) {
    if (this.length >= this.capacity) {
      this.#realloc("up");
    }
    this.#data[this.length] = el;
    this.length++;
    return this.length;
  }

  pop() {
    let elem = this.#data[this.length - 1];
    this.#data[this.length - 1] = 0;
    this.length--;
    return elem;
  }

  shrinkToFit() {
    if (this.length <= this.capacity / this.#CAP_INDEX) {
      this.#realloc("down");
    }
  }
}

const vec = new Vector(Uint8Array, 4);
vec.push(1); // Возвращает длину - 1
vec.push(2); // 2
vec.push(3); // 3
vec.push(4); // 4
vec.push(5); // 5 Увеличение буфера
vec.push(6); // 6
vec.push(7); // 7
vec.push(8); // 8
vec.push(9); // 9 Увеличение буфера

console.log(vec.capacity); // 16
console.log(vec.length); // 9

console.log(vec.pop());
console.log(vec.capacity); // 16

vec.shrinkToFit(); // Новая емкость 8
console.log(vec.capacity); // 8

console.log(vec.length); // 8
console.log(vec.buffer); // Ссылка на ArrayBuffer
