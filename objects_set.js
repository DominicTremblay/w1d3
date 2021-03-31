
const movie = {
  title: 'The Ghost in the Shell',
  year_released: 2017,
  director: 'Rupert Sanders',
  printDetails: function() {
// this is a special keyword that refers to the current obj => movie
    console.log(`Title: ${this.title}, Year: ${this.year_released}, Director: ${this.director}`)
  }
};

// if we want to add a new property/value on that object
// objectName.property = value or objectName['property] = value
// add a new property if that property does not exist in the object
movie.actor = 'Scarlett Johansson';


// what if we need to start with an empty object 
const anotherMovie = {};

anotherMovie.title = 'Tenet';
anotherMovie.year_released = 2020;
anotherMovie.director = 'Christopher Nolan';

// What about when the property(key) does exists

movie.title = 'Harry Potter'; // overwriting the value of title

console.log(movie);

anotherMovie.genres = ['action','thriller', 'scifi'];

console.log(anotherMovie);

// Read the values of the array of genres?

console.log(anotherMovie.genres[0]); // action

// Add a function to an object
// execute the function printDetails

console.log(movie.printDetails) // this function is not executed => missing ()

movie.printDetails() // () => execute the function

// How do we delete from an object?
// syntax:
// delete objectName.property

movie.director = null; // get rids of the value, but keeps the property name

delete movie.director; // removes the key/value pair

console.log(movie); // director is gone
