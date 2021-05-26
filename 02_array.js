// store a collection of data
// store multiple values

const titles = [
  'Tenet',
  'Ghost in the Shell',
  'Elysium',
  'The Expanse',
  'Altered Carbon',
  'Inception',
]

// access the elements

console.log('title1:', titles[0]);
console.log('title2:', titles[1]);

const movies = [['Tenet', 2020, '150 min', 'Christopher Nolan'], ['Ghost in the Shell', 2017, '107 min']];
// index 0,3 => title
// index 1,4 => year released
// index 2, 5 => runtime
// director

// title 2nd movie
console.log(movies[1][0]);