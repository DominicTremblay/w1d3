const titles = [
  'Tenet',
  'Ghost in the Shell',
  'Elysium',
  'The Expanse',
  'Altered Carbon',
  'Inception',
];


// console.log(titles[0]);
// console.log(titles[1]);
// console.log(titles[2]);

titles.push('Star Wars');

// console.log(titles);

// store titles, year release, director


const movies = [['Tenet', 2020, 'Christopher Nolan'], ['The Ghost in the Shell', 2017, 'Rupert Sanders'], ['Tenet', 'Christopher Nolan', 2020]];
console.log(movies[1][2]);

// loop for of vs for each
// you don't have the index

for (let title of titles) {
  console.log("Title: ", title);
}

// forEach, you can grab the index
// break, continue don't work
titles.forEach(function(title, index) {

  console.log("index:", index, "title", title)
});