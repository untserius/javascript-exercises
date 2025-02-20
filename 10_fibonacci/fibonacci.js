const fibonacci = function (n) {
	if (n < 0) return "OOPS";
	if (n === 0) return 0;

	let num1 = 0;
	let num2 = 1;

	for (let i = 2; i <= n; i++) {
		let currentNum = num1 + num2;
		num1 = num2;
		num2 = currentNum;
	}
	return num2;
};

// Do not edit below this line
module.exports = fibonacci;
