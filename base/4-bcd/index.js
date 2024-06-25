class BCD {
	#INITIAL_NUMBER;
	#MEMBER_NUMBER;
	#NUMBER_LENGTH = 0;
	#BCD_NUMBER = 0;
	#BCD_SIZE = 4;
	isNegative = false;
	
	constructor(num) {
		this.#INITIAL_NUMBER = num;
		this.#MEMBER_NUMBER = num;
		this.#formatValue();
	}
	
	#formatValue() {
		let point = 0;
		if (this.#MEMBER_NUMBER < 0n) {
			this.isNegative = true;
			this.#MEMBER_NUMBER *= -1n;
		}
		while (this.#MEMBER_NUMBER > 0n) {
			let temp = Number(this.#MEMBER_NUMBER) % 10;
			for (let i = this.#BCD_SIZE - 1; i >= 0; i--) {
				this.#BCD_NUMBER |= ((temp >> i) & 1) << (i + point);
			}
			point += this.#BCD_SIZE;
			this.#MEMBER_NUMBER /= 10n;
			this.#NUMBER_LENGTH += 1;
		}
		if (this.isNegative) {
			this.#BCD_NUMBER |= (1 << 28);
		}
	}
	
	#getBCDNumber(num) {
		let result = 0;
		let point = 1;
		let isNegative = false;
		if (num < 0n) {
			num *= -1n;
			isNegative = true;
		}
		while (num > 0n) {
			let digit = Number(num) % 10;
			result |= (digit & 0xF) * point;
			point <<= this.#BCD_SIZE;
			num /= 10n;
		}
		if (isNegative) {
			result |= (1 << 28);
		}
		return result;
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
	
	add(num) {
		let a = this.#BCD_NUMBER;
		let b = this.#getBCDNumber(num);
		let result = 0;
		let carry = 0;
		let factor = 1;
		
		while (a > 0 || b > 0 || carry > 0) {
			let digitA = a & 0xF;
			let digitB = b & 0xF;
			
			let sum = digitA + digitB + carry;
			
			if (sum >= 10) {
				sum -= 10;
				carry = 1;
			} else {
				carry = 0;
			}
			
			result |= (sum & 0xF) * factor;
			factor <<= this.#BCD_SIZE;
			
			a >>= this.#BCD_SIZE;
			b >>= this.#BCD_SIZE;
		}
		
		this.#BCD_NUMBER = result;
		return result;
	}
	
	substract(num) {
		let a = this.#BCD_NUMBER;
		let b = this.#getBCDNumber(num);
		
		if (((b >> 28) & 1) === 1) {
			b ^= (1 << 28);
		}
		
		let result = 0;
		let borrow = 0;
		let factor = 1;
		
		while (a > 0 || b > 0) {
			let digitA = a & 0xF;
			let digitB = b & 0xF;
			let diff = digitA - digitB - borrow;
			
			if (diff < 0) {
				diff += 10;
				borrow = 1;
			} else {
				borrow = 0;
			}
			
			result |= (diff & 0xF) * factor;
			factor <<= this.#BCD_SIZE;
			
			a >>= this.#BCD_SIZE;
			b >>= this.#BCD_SIZE;
		}
		this.#BCD_NUMBER = result;
		return result;
	}
	
	/*multiply(num) {
		let a = this.#BCD_NUMBER;
		let b = this.#getBCDNumber(num);
		
		let result = 0;
		let factor = 1;
		
		while (b > 0) {
			let digitB = b & 0xF;
			let temp = 0;
			let carry = 0;
			let factorInner = 1;
			let tempA = a;
			
			while (tempA > 0 || carry > 0) {
				let digitA = tempA & 0xF;
				let p = (digitA * digitB) + carry;
				
				carry = Math.floor(p / 10);
				p %= 10;
				
				temp |= (p & 0xF) * factorInner;
				factorInner <<= this.#BCD_SIZE;
				tempA >>= this.#BCD_SIZE;
			}
			
			result = this.add(BigInt(temp * factor));
			factor <<= this.#BCD_SIZE;
			b >>= this.#BCD_SIZE;
		}
		
		this.#BCD_NUMBER = result;
		return result;
	}*/
}

// const n = new BCD(-65536n);

// console.log(n.valueOf()); // 0b01100101010100110110 или 415030n

/*
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

console.log(n.isNegative)
*/

const n = new BCD(10n);

// console.log(n.add(15n));
// console.log(n.substract(15n));
// console.log(n.substract(5n));
// console.log(n.multiply(10n));