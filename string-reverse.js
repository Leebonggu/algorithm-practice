function stringReverse(str) {
  // let reversedString = [];
  // for (let i = str.length - 1; i >= 0 ; i -= 1) {
  //   reversedString.push(str[i]);
  // }
  // return reversedString.join('')
  return str.split('').reverse().join('');
  
}
console.log(stringReverse('Greetgings!'));
const reverse2 = (str) => {
  let reversed = '';
  for (let chr of str) {
    reversed = chr + reversed;
  }
  return reversed;
}

const reverse = (str) => {
  return str.split('').reduce((acc, char) => {
    console.log('acc:', acc, 'char', char);
    return char + acc;
  }, '')
};

console.log(reverse2('1212'));