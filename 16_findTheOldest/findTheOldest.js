const getAge = function (person) {
//   const currentDate = new Date();
//   if (person.yearOfDeath === undefined) {
//     person.yearOfDeath = currentDate.getFullYear();
//   }
//   return person.yearOfDeath - person.yearOfBirth;

// MORE EFFICIENT WAY
const currentYear = new Date().getFullYear();
const deathYear = person.yearOfDeath ?? currentYear;
return deathYear - person.yearOfBirth;
};

const findTheOldest = function (array) {
  let oldest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (getAge(array[i]) > getAge(oldest)) {
      oldest = array[i];
    }
  }
  return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
