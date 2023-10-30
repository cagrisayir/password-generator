interface IRandomFunc {
	[key: string]: () => string;
}

const randomFunc: IRandomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

interface IGenerate {
	length: number;
	lower: boolean;
	upper: boolean;
	number: boolean;
	symbol: boolean;
}

const generate = ({ length, lower, upper, number, symbol }: IGenerate) => {
	let generatedPassword: string = '';
	const typesCount: number =
		(lower ? 1 : 0) + (upper ? 1 : 0) + (number ? 1 : 0) + (symbol ? 1 : 0);
	const typesArr: string[] = [
		lower ? 'lower' : '',
		upper ? 'upper' : '',
		number ? 'number' : '',
		symbol ? 'symbol' : '',
	].filter(item => Object.values(item)[0]);
	if (typesCount === 0) {
		return '';
	}
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
};

export default generate;
