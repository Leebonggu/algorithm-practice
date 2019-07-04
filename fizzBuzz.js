
// Q.
// 숫자를 하나 받습니다.
// 숫자 만큼 console을 찍어낼 건데
// 3의 배수에서는 fizz
// 5의 배수에서는 buzz
// 3과 5의 배수에는 fizzbuzz를 찍어내면 된다.

const fizzBuzz = (n) => {
  if(n < 1) {
    console.log('1보다 큰 수를 입력바랍니다.');
    return;
  }
  for(let i = 1; i <= n; i += 1) {
    // is the number a multiple of 3 and 5 ?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } else {
      if (i % 3 === 0) {
        console.log('fizz')
      } else if (i % 5 === 0) {
        console.log('buzz')
      } else  {
        console.log(i);
      }
    }
  }
};

const yourFizzBuzz = (n) => {

};