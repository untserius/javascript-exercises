const getTheTitles = function (books) {
	// My Version
	const newArray = [];

	books.forEach(function (books) {
		newArray.push(books.title);
	});
	return newArray;

	// books.map((book) => {
	//     book.title
	// });
};

// Do not edit below this line
module.exports = getTheTitles;
