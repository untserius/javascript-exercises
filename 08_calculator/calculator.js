const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	return array.reduce(function (total, current) {
		return total + current;
	}, 0);
};

const multiply = function (array) {
	return array.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
	let init = 1;
	for (let i = 1; i <= b; i++) {
		init = init * a;
	}
	return init;
};

const factorial = function (a) {
	let factArray = [];
	for (let i = a; i > 0; i--) {
		factArray.push(i);
	}

	return factArray.reduce((product, current) => {
		return product * current;
	}, 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
