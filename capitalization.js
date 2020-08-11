const Capitalization = (str) => {
  return str.split(' ').map((eachStr) => (
    eachStr.slice(0, 1).toUpperCase() + eachStr.slice(1, eachStr.length)
  )).join(' ');
} ;
