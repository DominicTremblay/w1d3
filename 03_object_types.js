// Objects are a data structure than can represent an element (object) with properties and values


// creating an empty object
const movie = {
};

// create an object litterals with initial values
// const movie = {
//   title: 'Tenet',
//   director: 'Christopher Nolan', 
//   yearRelease: '2020'
// };

// add a property/value to this object

// objectName["key"] = value;
// objectName.key = value;
// movie.title = “blablabla”;

movie.title = 'Tenet';
movie["title"] = 'Tenet';
movie.director = 'Christopher Nolan';
movie.yearReleased = '2020';

console.log(movie);

// Read a value
// objectName["key"] => associated value
// objectName.key

console.log(movie["title"]);
console.log(movie.title);


// Print a property that is not in the object
if (movie.director) {
  console.log(movie.director);
} else {
  console.log("Sorry, no director for this movie!");
}

// Updating a value => we're setting a value of an existing key

movie.title = "Foundation";

console.log(movie);

// dot notation of [] ?

// store the string 'title' in a variable called property
const property = 'title';

// this does not work
console.log("property",movie.property); 
// this does not work either
console.log("property", movie["property"]);
// this works! When the property name is stored in a variable, you have to use []
console.log("property", movie[property]);

// delete

delete movie.yearReleased


