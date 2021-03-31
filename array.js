const titles = [
  'Tenet',
  'Ghost in the Shell',
  'Elysium',
  'The Expanse',
  'Altered Carbon',
  'Inception',
];

// index based, starts at index 0

// console.log(titles[0]);
// console.log(titles[1]);
// console.log(titles[2]);

// limitation of arrays

// const movies = ['Tenet', 2020, 'Christopher Nolan', 'The Ghost in the Shell', 2017, 'Rupert Sanders'];

// title => index 0
// year => index 1
// director => index 2
// not really convenient or practical

const movies = [['Tenet', 2020, 'Christopher Nolan'], ['The Ghost in the Shell', 2017, 'Rupert Sanders']];

console.log(movies[0]); // first movie
console.log(movies[0][0]); // title of the first movie
console.log(movies[1]); // second movie