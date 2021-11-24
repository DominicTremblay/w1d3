const movie = {
  title: 'Tenet',
  yearReleased: 2020,
  director: 'Christopher Nolan',
  genres: ['action', 'thriller', 'scifi'],
};

// for in loops throught the keys
for (let key in movie) {
  console.log("key:", key, "Value:", movie[key]); // <= key
  // print out the value => objectName[key] => associated value

  // detect if the value is an array?
  if (Array.isArray(movie[key])) {
    for (let element of movie[key]) {
      console.log("genre", element)
    }
  }


}

// for of ? We need an array
// Object.keys(objectName) => array of the keys
// Object.values(objectName) => array of the values
// Object.entries(objectName) => array of the both keys and values

const properties = Object.keys(movie);
const values = Object.values(movie);
const keysValues = Object.entries(movie);

console.log(keysValues);


for (let key of properties) {
  console.log("key:", key, "Value:", movie[key]);
}

for (let [key, val] of keysValues) {
  console.log(key, val)
}





