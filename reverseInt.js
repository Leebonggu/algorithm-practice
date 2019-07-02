const reverseInt = (number) => {
  // 숫자가 들어와
  // 양수인지 음수인지 조건을 달아볼까?
  let result = '';
  if (number < 0) {
    const firstProcess = String(number).split('').slice(1, String(number).length).reverse();
    result = Number(firstProcess.join('')) * -1;
    return result;
  } 
  result = Number(String(number).split('').reverse().join(''));
  return result;
}

const solution1 = (number) => {
  const reverse = number
    .toString()
    .split('')
    .reverse()
    .join('')
    // Math.sign(number): if number is positive, Math.sign return +1 else return -1
  return parseInt(reverse) * Math.sign(number);
}

// 반복되는 코드는 반드시 개선의 여지가 있다.