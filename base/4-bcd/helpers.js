function binary(num) {
	const str = new Uint32Array([num])[0].toString(2);
	return '0b' + str.padStart(32, '0').replace(/(.{4})(?!$)/g, '$1_');
}

function parseBinary(str) {
	return parseInt(str.replace(/^0b|_/g, ''), 2) >> 0;
}

console.log(binary(20480))