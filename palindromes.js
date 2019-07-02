const palindromes = (str) => {
  return str.split('').reverse().join('') === str;
};

const palindromes2 = (str) => {
  const reversedCharacter = str.split('').reduce((acc, character) => {
    return character + acc;
  }, '');
  return str === reversedCharacter;
};

// using every
const palindromes3 = (str) => {
  return str.split('').every((char, index) => {
    // 모든 요소가 조건을 통과하면 True 아니면 false
    return char === str[str.length - index - 1];
  });
};

console.log(palindromes3('abba'))