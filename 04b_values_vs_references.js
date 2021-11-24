const movie = {
  title: 'Tenet',
  yearReleased: 2020,
  director: 'Christopher Nolan',
  genres: ['action', 'thriller', 'scifi'],
};


// Copycat: #AD456
// movie: #AD456
const copycat = movie;

copycat.title = 'Foundation';

// copy of the movie object

// Object.assign
// create a new reference
const newMovie = Object.assign({}, movie)

newMovie.title = 'The Ghost in the Shell';

// console.log(movie);
// console.log(newMovie);

// another way to make a duplicate

const yetAnotherMovie = {...movie};

yetAnotherMovie.title = "The Expanse";

console.log(yetAnotherMovie)