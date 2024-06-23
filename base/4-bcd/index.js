class BCD {
	#numbers = [];
	#BCD_NUMBER = 0;
	#BCD_SIZE = 4;
	#MEMBER_NUMBER;
	#NUMBER_LENGTH = 0;
	
	constructor(num) {
		this.num = num;
		this.#MEMBER_NUMBER = num;
		this.#formatValue();
	}
	
	#formatValue() {
		let point = 0;
		while (this.#MEMBER_NUMBER > 0n) {
			let temp = Number(this.#MEMBER_NUMBER) % 10;
			for (let i = this.#BCD_SIZE - 1; i >= 0; i--) {
				this.#BCD_NUMBER |= ((temp >> i) & 1) << (i + point);
			}
			point += this.#BCD_SIZE;
			this.#MEMBER_NUMBER /= 10n;
			this.#NUMBER_LENGTH += 1;
		}
	}
	
	#mask(len, pos) {
		let n = ~0;
		n <<= 32 - len;
		n >>>= 32 - pos;
		
		return n;
	}
	
	valueOf() {
		return BigInt(this.#BCD_NUMBER);
	}
	
	get(pos) {
		pos = pos < 0 ? pos + this.#NUMBER_LENGTH : pos;
		let size = this.#BCD_SIZE * this.#NUMBER_LENGTH;
		let position = pos > 0 ? size - (pos * this.#BCD_SIZE) : size;
		return (this.#BCD_NUMBER & this.#mask(this.#BCD_SIZE, position)) >> (position - this.#BCD_SIZE);
	}
}

const n = new BCD(65536n);

console.log(n.valueOf()); // 0b01100101010100110110 или 415030n

console.log(n.get(0)); // 6
console.log(n.get(1)); // 5
console.log(n.get(2)); // 5
console.log(n.get(3)); // 3
console.log(n.get(4)); // 6

console.log(n.get(-1)); // 6
console.log(n.get(-2)); // 3
console.log(n.get(-3)); // 5
console.log(n.get(-4)); // 5
console.log(n.get(-5)); // 6
