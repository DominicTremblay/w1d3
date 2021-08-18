const movie = {
  title: 'Tenet',
  yearReleased: 2020,
  director: 'Christopher Nolan',
  genres: ['action', 'thriller', 'scifi'],
};

// loop through the properties and values on the object
// for in => loop through the key of the object

for (let key in movie) {
  console.log("key:", key); // print out the keys
  console.log("value:", movie[key]); // prints out the value

  // if (Array.isArray(movie[key])) {
  //   for (let genre of movie[key]) {

  //     console.log("genre:", genre);
  //   }
  // }

}

// loop through the genres
for (let genre of movie.genres) {

  console.log("genre:", genre);

}


// Transfor object into an array 
// Object.keys
// Object.values
// Object.entries


const keysArr = Object.keys(movie);

// for (let key of keysArr) {

//   console.log("key:", key); // print out the keys
//   console.log("value:", movie[key]); // prints out the value
// }

// console.log(Object.values(movie));

