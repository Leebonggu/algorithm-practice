// get positive number

const steps = (number) => {
  if (number < 0) {
    return 
  }
  for (let row = 0; row < number; row += 1 ) {
    let stair = '';
    for (let column = 0; column < number; column += 1) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
};


// using recursion

const recurStep = (n, row = 0, stair = '') => {
  if (n === row) {
    return
  }

  if ( n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

recurStep(10);

