// data structure to store related properties of an element
// collection of data stored as key-value pairs
// values associated with each key can be of any types
// keys are stings

const key = 'genre';

// creating an object litteral
const movie = {
  title: 'Tenet',
  year_released: 2020,
  director: 'Christopher Nolan',
  [key]: 'action'
  // genre: ['action', 'thriller']
};

// Access the values on that object?
// 2 notations: [], dot (.)

console.log('Title:', movie['title']);
console.log('Year:', movie.year_released);

// store the key name in a variable
// used the [] notation (without the quotes) when the name of key is stored in a variable
const keyName = 'director';

console.log('Director:', movie[keyName]); // <= use this one
console.log('Director:', movie.keyName);

// Add a new key-value pair in the movie object

// nameOfObject['newKey'] = 'new value'; or
// nameOfObject.newKey = 'new value';

// adding runtime
movie['runtime'] = '150 min';
// adding genre
// const genre = 'action'

// movie.genre = genre;

// what happens if I use '=' with an existing key?
// Overwrites the value
// movie.genre = 'drama';
console.log('movie:', movie);

// Bonus
// add multiple properties at the same time => merging 2 objects together
Object.assign(movie, {
  actors: ['John David Washington', 'Robert Pattinson', 'Elizabeth Debicki'],
  rating: 8,
});

console.log(movie);

// Object.entries
// An array of all key-value pairs
console.log(Object.entries(movie));

// an array of all the keys
console.log(Object.keys(movie));

// an array of all the values
console.log(Object.values(movie));

// Deleting a key value pair
delete movie['rating'];

console.log(movie);
