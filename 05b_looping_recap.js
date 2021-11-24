const movie = {
  title: 'Tenet',
  yearReleased: 2020,
  director: {
    name: 'Christopher Nolan',
    dob: '16 march 1972'
  },
  genres: ['action', 'thriller', 'scifi'],
  boxOffice: undefined
};

// read the director name
movie['director']['name']; //=> 'Christopher Nolan'

// read a value from an object
// objectName[keyName] => associated value

for (let keyName in movie) {
  console.log("keyName:", keyName, "\tAssociated value:", movie[keyName]);
}