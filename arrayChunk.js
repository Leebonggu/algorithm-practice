const chunk = (arr, size) => {
  const result = [];
  let innerArr = [];
  for(let i = 0; i < arr.length; i += 1) {
    innerArr.push(arr[i]);
    if (innerArr.length === size || arr[i + 1] === undefined) {
      result.push(innerArr);
      innerArr = [];
    }
  }
  return result;
}

const chunkSol1 = (arr, size) => {
  const chunked = [];
  for (let element of arr) {
    console.log(element);
    const last = chunked[chunked.length - 1];
    console.log(last);
    if(!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}


const chunkSol2 = (arr, size) => {
  // using array.slice
  const result = [];
  let index = 0;

  while (index < arr.length) {
    const slicedArr = arr.slice(index, index + size); // sallow copy
    result.push(slicedArr);
    index += size;
  }
  return result;
}

console.log(chunkSol2([1,2,3,4,5,6], 5));
