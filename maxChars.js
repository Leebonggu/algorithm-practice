const maxChars = (str) => {
  const result = {};
  let maxNumber = 0;
  let maxChar = '';
  str.split('').forEach((char, index) => {
    // if (!Object.keys(result).includes(char)) {
    //   result[char] = 1;
    // } else {
    //   result[char] += 1;
    // }
    result[char] = result[char] + 1 || 1;
  });
  // const maxNumber = Math.max.apply(null, Object.values(result));
  // const maxChars  = Object.keys(result).filter((char, index) => (
  //   result[char] === maxNumber
  // ));
  for (let char in result) {
    if (result[char] > maxNumber) {
      maxNumber = result[char];
      maxChar = char;
    }
  }
  console.log(maxNumber, maxChar);
  return maxChar;
};

console.log(maxChars('Hello world'));

//  for ... of str;
//  for ... on obj;