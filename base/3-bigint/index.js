function fizzBuzz() {
	let counter = 0n;
	return {
		next: function () {
			counter += 1n;
			let value = '';
			if (counter % 3n === 0n) {
				value += 'Fizz';
			}
			if (counter % 5n === 0n) {
				value += 'Buzz';
			}
			return value === '' ? counter : value;
		}
	}
}

const myFizzBuzz = fizzBuzz();
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
console.log(myFizzBuzz.next());
