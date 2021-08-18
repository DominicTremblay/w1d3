// Object is a data structure to store related properties of an element
// Information is stored in key/value pairs

// initializing an empty object
const emptyMovie = {};

// object litteral
const movie = {
  title: "The Ghost in the Shell",
  yearReleased: 2017,
  director: "Rubert Sanders",
}

// console.log("title:", movie.title);
// console.log("year:", movie['yearReleased']);
// console.log(`this is the director: ${movie.director} `);

const property = 'title';

// console.log('property:', movie[property]);

// add a new key/value pair to an object

movie.genres = ['action', 'thriller', 'scifi'];

console.log(movie)