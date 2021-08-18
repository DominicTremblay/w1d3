const movie = {
  title: 'Tenet',
  yearReleased: 2020,
  director: 'Christopher Nolan',
  genres: ['action', 'thriller', 'scifi'],
};

let name = "SongeBob";


// primitive types are passed by value => value types
const setName = function (newName) {

  newName = "Sam";

  return newName;
}

setName(name);

console.log("name:", setName("Wahtever"));
console.log("name:", name);


// object are passed by reference => reference types
const setTitle = function(newTitle, movieObj) {

  movieObj.title = newTitle;

};

setTitle("The Ghost in the Shell", movie)

// console.log(movie);