const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array.slice();
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter(string => vowels.includes(string[0].toLowerCase()));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total;
};

const sortByLastLetter = strings => {
  strings.sort((a, b) => {
    if (a.slice(-1) < b.slice(-1)) {
      return -1;
    }

    if (a.slice(-1) > b.slice(-1)) {
      return 1;
    }

    return 0;
  });

  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
