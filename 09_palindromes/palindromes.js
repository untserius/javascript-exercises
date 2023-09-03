const palindromes = function (string) {
	const trimmedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
	const reversedString = trimmedString.split("").reverse().join("");
	if (reversedString == trimmedString) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
