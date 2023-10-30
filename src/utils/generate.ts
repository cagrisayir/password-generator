function generate(
	length: number,
	lower: boolean,
	upper: boolean,
	number: boolean,
	symbol: boolean
): string {
	let password = '';
	const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
	const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numberChars = '0123456789';
	const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

	let chars = '';
	if (lower) chars += lowerChars;
	if (upper) chars += upperChars;
	if (number) chars += numberChars;
	if (symbol) chars += symbolChars;

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		password += chars[randomIndex];
	}

	return password;
}

export default generate;

// create a generate fuction that takes in the length, lower, upper, number, symbol and returns a string of the password
// function should generate random password. If options are true then add that type of character to the password
