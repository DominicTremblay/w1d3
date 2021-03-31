// Object is a data structure to store related properties of an element
// Information is stored in key/value pairs
// key is a string
// value can be any types of data: primitive, array, object, function

// object litterals

// const movie = {}; // empty object => no properties yet!

const movie = {
  title: 'The Ghost in the Shell',
  year_released: 2017,
  director: 'Rupert Sanders',
  // keyName: 'fake property'
};

// Access the value of a property
// syntax: dot or brackets notation
// objectName.property or objectName['property']

console.log(movie.title); // prints the title
console.log(movie['title']); // prints the title
console.log(movie.year_released); // prints the year
console.log(movie.director); // prints the director

// When don't we have a choice?
// We have to use [] when the keyname is stored in a variable

let keyName = 'director'
console.log(keyName); // director

// any property that does not exist in the object will return undefined
keyName = 'director';

console.log(movie.keyName); // undefined => cannot use this notation when the key name is in a variable
console.log(movie['keyName']); // undefined => same
console.log(movie[keyName]); // variable here => no quotes, prints the value of the director

console.log(keyName); // prints 'director' (key name)