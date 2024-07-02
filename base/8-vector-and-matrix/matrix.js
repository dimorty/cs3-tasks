class Matrix {
  #view;
  #data;
  #BYTES;

  constructor(view, i, x, y) {
    this.#view = view;
    this.#BYTES = this.#view.BYTES_PER_ELEMENT;
    this.i = i;
    this.x = x;
    this.y = y;
    this.buffer = new ArrayBuffer(this.i * this.x * this.y * this.#BYTES);
    this.#data = new this.#view(this.buffer);
  }

  set(i, x, y, el) {
    let point = i * (this.x * this.y) + (x + y * this.x);
    this.#data[point] = el;
    return el;
  }

  get(i, x, y) {
    let point = i * (this.x * this.y) + (x + y * this.x);
    return this.#data[point];
  }

  values() {
    return this.#data;
  }
}

const matrix3n4n5 = new Matrix(Int32Array, 3, 4, 5);

matrix3n4n5.set(0, 0, 0, 1);
matrix3n4n5.set(0, 1, 0, 2);
matrix3n4n5.set(0, 2, 0, 3);
matrix3n4n5.set(0, 3, 0, 4);

matrix3n4n5.set(0, 0, 1, 5);
matrix3n4n5.set(0, 1, 1, 6);
matrix3n4n5.set(0, 2, 1, 7);
matrix3n4n5.set(0, 3, 1, 8);

matrix3n4n5.set(0, 0, 2, 9);
matrix3n4n5.set(0, 1, 2, 10);
matrix3n4n5.set(0, 2, 2, 11);
matrix3n4n5.set(0, 3, 2, 12);

matrix3n4n5.set(0, 0, 3, 13);
matrix3n4n5.set(0, 1, 3, 14);
matrix3n4n5.set(0, 2, 3, 15);
matrix3n4n5.set(0, 3, 3, 16);

matrix3n4n5.set(0, 0, 4, 17);
matrix3n4n5.set(0, 1, 4, 18);
matrix3n4n5.set(0, 2, 4, 19);
matrix3n4n5.set(0, 3, 4, 20);

matrix3n4n5.set(1, 0, 0, 1);
matrix3n4n5.set(1, 1, 0, 2);
matrix3n4n5.set(1, 2, 0, 3);
matrix3n4n5.set(1, 3, 0, 4);

matrix3n4n5.set(1, 0, 1, 5);
matrix3n4n5.set(1, 1, 1, 6);
matrix3n4n5.set(1, 2, 1, 7);
matrix3n4n5.set(1, 3, 1, 8);

matrix3n4n5.set(1, 0, 2, 9);
matrix3n4n5.set(1, 1, 2, 10);
matrix3n4n5.set(1, 2, 2, 11);
matrix3n4n5.set(1, 3, 2, 12);

matrix3n4n5.set(1, 0, 3, 13);
matrix3n4n5.set(1, 1, 3, 14);
matrix3n4n5.set(1, 2, 3, 15);
matrix3n4n5.set(1, 3, 3, 16);

matrix3n4n5.set(1, 0, 4, 17);
matrix3n4n5.set(1, 1, 4, 18);
matrix3n4n5.set(1, 2, 4, 19);
matrix3n4n5.set(1, 3, 4, 20);

matrix3n4n5.set(2, 0, 0, 1);
matrix3n4n5.set(2, 1, 0, 2);
matrix3n4n5.set(2, 2, 0, 3);
matrix3n4n5.set(2, 3, 0, 4);

matrix3n4n5.set(2, 0, 1, 5);
matrix3n4n5.set(2, 1, 1, 6);
matrix3n4n5.set(2, 2, 1, 7);
matrix3n4n5.set(2, 3, 1, 8);

matrix3n4n5.set(2, 0, 2, 9);
matrix3n4n5.set(2, 1, 2, 10);
matrix3n4n5.set(2, 2, 2, 11);
matrix3n4n5.set(2, 3, 2, 12);

matrix3n4n5.set(2, 0, 3, 13);
matrix3n4n5.set(2, 1, 3, 14);
matrix3n4n5.set(2, 2, 3, 15);
matrix3n4n5.set(2, 3, 3, 16);

matrix3n4n5.set(2, 0, 4, 17);
matrix3n4n5.set(2, 1, 4, 18);
matrix3n4n5.set(2, 2, 4, 19);
matrix3n4n5.set(2, 3, 4, 20);

console.log(Array.from(matrix3n4n5.values()));

console.log(matrix3n4n5.buffer);

/*const matrix3n3n3 = new Matrix(Int32Array, 3, 3, 3);

matrix3n3n3.set(0, 0, 0, 1);
matrix3n3n3.set(0, 1, 0, 2);
matrix3n3n3.set(0, 2, 0, 3);

matrix3n3n3.set(0, 0, 1, 4);
matrix3n3n3.set(0, 1, 1, 5);
matrix3n3n3.set(0, 2, 1, 6);

matrix3n3n3.set(0, 0, 2, 7);
matrix3n3n3.set(0, 1, 2, 8);
matrix3n3n3.set(0, 2, 2, 9);

matrix3n3n3.set(1, 0, 0, 123);
matrix3n3n3.set(1, 1, 0, 234);
matrix3n3n3.set(1, 2, 0, 345);

matrix3n3n3.set(1, 0, 1, 456);
matrix3n3n3.set(1, 1, 1, 567);
matrix3n3n3.set(1, 2, 1, 678);

matrix3n3n3.set(1, 0, 2, 789);
matrix3n3n3.set(1, 1, 2, 890);
matrix3n3n3.set(1, 2, 2, 901);

matrix3n3n3.set(2, 0, 0, 321);
matrix3n3n3.set(2, 1, 0, 432);
matrix3n3n3.set(2, 2, 0, 543);

matrix3n3n3.set(2, 0, 1, 654);
matrix3n3n3.set(2, 1, 1, 765);
matrix3n3n3.set(2, 2, 1, 876);

matrix3n3n3.set(2, 0, 2, 987);
matrix3n3n3.set(2, 1, 2, 123123123);
matrix3n3n3.set(2, 2, 2, 109);

matrix3n3n3.get(0, 0, 0);
matrix3n3n3.get(0, 1, 0);
matrix3n3n3.get(0, 2, 0);

matrix3n3n3.get(0, 0, 1);
matrix3n3n3.get(0, 1, 1);
matrix3n3n3.get(0, 2, 1);

matrix3n3n3.get(0, 0, 2);
matrix3n3n3.get(0, 1, 2);
matrix3n3n3.get(0, 2, 2);

console.log(matrix3n3n3.buffer);*/

/* const matrix2n2n2 = new Matrix(Int32Array, 2, 2, 2);

matrix2n2n2.set(0, 0, 0, 1);
matrix2n2n2.set(0, 1, 0, 2);
matrix2n2n2.set(0, 0, 1, 3);
matrix2n2n2.set(0, 1, 1, 4);

matrix2n2n2.set(1, 0, 0, 5);
matrix2n2n2.set(1, 1, 0, 6);
matrix2n2n2.set(1, 0, 1, 7);
matrix2n2n2.set(1, 1, 1, 8);

matrix2n2n2.get(0, 0, 0);
matrix2n2n2.get(0, 1, 0);
matrix2n2n2.get(0, 0, 1);
matrix2n2n2.get(0, 1, 1);

matrix2n2n2.get(1, 0, 0);
matrix2n2n2.get(1, 1, 0);
matrix2n2n2.get(1, 0, 1);
matrix2n2n2.get(1, 1, 1);

console.log(matrix2n2n2.buffer);*/
