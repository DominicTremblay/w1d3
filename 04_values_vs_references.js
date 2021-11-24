const movie = {
  title: 'Tenet',
  yearReleased: 2020,
  director: 'Christopher Nolan',
  genres: ['action', 'thriller', 'scifi'],
};

let name = "SongeBob";

// primtive types are passed by value => making a copy of the value
const setName = function(newName) {
  newName = "Patrick";
}

setName(name);

console.log("name:", name);

// change the title of the movie
// 2 paramters 
// newTitle => title of the new movie => string
// movieObj => reference to the movie object => object type

//Object types are passed by reference
const setTitle = function(newTitle, movieObj) {
// movieObj is in the local scope of the function
movieObj['title'] = newTitle;
console.log(movieObj);

}

setTitle("Foundation", movie);

// does it change also movie from the global scope? => yes
console.log(movie);

