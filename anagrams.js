const anagrams = (str1, str2) => {
  const string1 = refiningStringToObject(str1);
  const string2 = refiningStringToObject(str2);
  
  if (Object.keys(string1).length !==  Object.keys(string2).length) {
    return false;
  }
  for(let eachChar in string1) {
    if (string1[eachChar] !== string2[eachChar]) {
      return false;
    }
  }
  return true;
}

const refiningStringToObject = (word) => {
  const result = word.replace(/[^\w]/g, '').toLowerCase();
  const obj = {};

  for (let char of result) {
    obj[char] = obj[char] + 1 || 1;
  }

  return obj;
}  

console.log(anagrams('hi there', 'Hi therae!!'))

