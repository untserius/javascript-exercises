const findTheOldest = function (people) {
	const getAge = function (birth, death) {
		if (!death) {
			death = new Date().getFullYear();
		}
		return death - birth;
	};

	const oldest = people.reduce((oldestPer, currentPer) => {
		const oldestAge = getAge(oldestPer.yearOfBirth, oldestPer.yearOfDeath);
		const currentAge = getAge(currentPer.yearOfBirth, currentPer.yearOfDeath);

		if (oldestAge < currentAge) {
			return currentPer;
		} else {
			return oldestPer;
		}
	});

	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
