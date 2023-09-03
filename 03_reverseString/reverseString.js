const reverseString = function(text) {
let splitLetters = text.split("");
let reverseLetters = splitLetters.reverse();
let joinLetters = reverseLetters.join("");
return joinLetters;
};

// Do not edit below this line
module.exports = reverseString;
