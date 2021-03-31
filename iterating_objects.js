const movie = {
  title: 'Tenet',
  year_released: 2020,
  director: 'Christopher Nolan',
  genres: ['action', 'thriller', 'scifi'],
};

// loop through the properties of the object
// for loops: c-style loop (let i=0), for of loop, forEach,  for in loop
// some loops works only with iterables (arrays)
// for objects => for in loop

// we're defining a variable
for (let keyName in movie) {
  console.log(keyName); // print out the key names => not getting the values
  console.log(`${movie[keyName]}`); // print the values?

  // testing if the value is an array
  if (Array.isArray(movie[keyName])) {
  //   for (let item of movie[keyName]) {
  //     console.log(item);
  //   }
    console.log(movie[keyName].join(' - '));
}
}

const keyList = Object.keys(movie); // create an array out of the list of the keys
const valueList = Object.values(movie); // create an array out of the values
const entries = Object.entries(movie); // create an array of both keys and values
console.log(keyList);
console.log(valueList);
console.log(entries);


const retrieveKey = function(obj, val) {
  for (let keyName in obj) {
    if (obj[keyName] === val) {
      return keyName;
    }
  }

  return false;

}

const result = retrieveKey(movie, 2020) // year_released

console.log(result);