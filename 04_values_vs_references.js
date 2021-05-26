// value types vs reference types
// value types => primitive data types
// reference types => none primitive data types (object, arrays)

const title = "Elysium";

// title is getting of copy of the value
// a new local variable to the function is being declred
// any change to that local variable won't have an impact on the global one
const setTitle = function(title) {
  title = "The Guardians of the Galaxy";
  console.log("title inside the function:", title)
}


// setTitle(title);
// console.log("Title outside the function:", title)

const movie = {
  title: 'Tenet',
  year_released: 2020,
  director: 'Christopher Nolan',
  genre: ['action', 'thriller']
};


const setTitleObj = function(movieObj) {

  movieObj.title = 'The Guardians of the Galaxy';

  console.log("Title inside the function", movieObj.title)

}

setTitleObj(movie);
console.log("Title outside the function", movie.title)
