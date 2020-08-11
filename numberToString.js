/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

function chageNumberToArr(arr) {
  console.log(arr);
  const total = [];
  let numberArr = [];

  arr.reverse().forEach((number, index) => {
    numberArr.push(number);
    if (numberArr.length === 3 || !arr[index + 1]) {
      total.push(numberArr.reverse());
      numberArr = [];
    }
  });
  return total.reverse();
};

function changeNumberToString(arr) {
  console.log(arr);
  let length = arr.length;
  const keys = Object.keys(numbersToPlace);
  let stringfiedNumber = '';
    for (let i = 0; i < arr.length; i += 1) {
      let joined = arr[i].join('');
      if (joined >= 100) {
        if (joined[1] === '0' && joined[2] === '0') {
          stringfiedNumber += ` ${numbersToWords[joined[0]]} ${numbersToPlace['100']}`;
        } else if (joined[1] === '0' && joined[2] !== '0') {
          const key = joined[0] + joined[1];
          stringfiedNumber += ` ${numbersToWords[key]} ${numbersToWords[joined[2]]} ${numbersToPlace['100']}`;
        } else if (joined[1] !== '0' && joined[2] === '0') {
          const key = joined[1] + joined[2];
          stringfiedNumber += ` ${numbersToWords[joined[0]]} ${numbersToPlace['100']} ${numbersToWords[key]} `;
        } else {
          const tensKey = joined[1] + '0';
          stringfiedNumber += ` ${numbersToWords[joined[0]]} ${numbersToPlace['100']} ${numbersToWords[tensKey]} ${numbersToWords[joined[2]]}`;
        }
      } else if (joined < 100 && joined > 10) {
        joined = String(Number(joined));
        if (joined[1] === '0') {
          const key = joined[0] + joined[1];
          stringfiedNumber += `${numbersToWords[key]}`;
        } else {
          if (joined > 19) {
            const key = joined[0] + '0';
            stringfiedNumber += `${numbersToWords[key]} ${numbersToWords[joined[1]]} `;
          } else {
            stringfiedNumber += `${numbersToWords[joined]} `;
          }
        }
      } else {
        const key = String(Number(joined));
        stringfiedNumber += ` ${numbersToWords[key]}`;
      }

      if (length === 1) {
        continue;
      } else {
        // console.log(keys);
        // console.log(numbersToPlace[keys[length]]);
        stringfiedNumber += numbersToPlace[keys[length]] ;
        length -= 1;
      }
    }
  return stringfiedNumber;
}

Number.prototype.toEnglish = function () {
  let integer = null;
  let decimal = null;
  const [firstNumber, secondNumber] = String(this).split('.');
  integer = chageNumberToArr([...firstNumber]);
  if (secondNumber) {
    decimal = chageNumberToArr([...secondNumber]);
  }
  console.log(integer)


  return decimal ? `${changeNumberToString(integer)} and ${changeNumberToString(decimal)}` : `${changeNumberToString(integer)}`
};

console.log((12345).toEnglish());