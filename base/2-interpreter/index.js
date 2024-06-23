const instructions = {
	'SET A': 0,
	'PRINT A': 1,
	'IFN A': 2,
	'RET': 3,
	'DEC A': 4,
	'JMP': 5
};

const program = [
	instructions['SET A'], // Ставим значения аккумулятора
	10, // В 10
	instructions['PRINT A'], // Выводим значение на экран
	instructions['IFN A'], // Если A равно 0
	instructions['RET'], // Программа завершается
	0, // И возвращает 0
	instructions['DEC A'], // Уменьшаем A на 1
	instructions['JMP'], // Устанавливаем курсор выполняемой инструкции
	2 // В значение 2
];

function execute(program) {
	let acc = null;
	let index = 0;
	let cond = false;
	while (true) {
		switch (program[index]) {
			case instructions['SET A']:
				acc = program[index + 1];
				index += 2;
				break;
			case instructions['PRINT A']:
				console.log(acc);
				index++;
				break;
			case instructions['IFN A']:
				cond = acc === 0;
				index++;
				break;
			case instructions['RET']:
				if (cond) {
					console.log(program[index + 1])
					return;
				} else {
					index += 2;
				}
				break;
			case instructions['DEC A']:
				acc--;
				index++;
				break;
			case instructions['JMP']:
				index = program[index + 1];
				break;
		}
	}
}
execute(program);