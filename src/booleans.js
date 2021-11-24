function negate(a) {
  return !a;
}

function both(a, b) {
  if (!a || !b) {
    return false;
  }

  return true;
}

function either(a, b) {
  if (a || b) {
    return true;
  }

  return false;
}

function none(a, b) {
  if (a || b) {
    return false;
  }

  return true;
}

function one(a, b) {
  if ((a && !b) || (b && !a)) {
    return true;
  }

  return false;
}

function truthiness(a) {
  const falsy = [false, 0, '', null, undefined, NaN];

  if (falsy.includes(a)) {
    return false;
  }

  return true;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }

  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }

  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }

  return false;
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }

  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }

  return false;
}

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }

  return false;
}

function startsWith(char, string) {
  if (string[0] === char) {
    return true;
  }

  return false;
}

function containsVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i += 1) {
    if (vowels.includes(string[i].toLowerCase())) {
      return true;
    }
  }

  return false;
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }

  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
