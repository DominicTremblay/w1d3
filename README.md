# JavaScript Objects

## Content

- Data Types
- Array Recap
- Objects
- Value vs Reference Types
- Looping through object


## Data Types

We have 2 types of data in JavaScript:

* Primitive Types
* Object Types

### Primitive Types 

7 primitive types:

* string
* number
* bigint
* boolean
* undefined
* null
* symbol

### None primitive Types

* None primitive data types such as array and objects are objects
* Even function are objects!

#### Array Recap

* Array is a data structure to store a list of elements into a single variable
* Every elements is associated with an index starting at 0

 `const titles = ['Tenet','Ghost in the Shell', 'Elysium','The Expanse','Altered Carbon', 'Inception']`

 We find a limitation with arrays when we want to group related data of each items.

 `const movies = ['Tenet', 2020,'Christopher Nolan','Ghost in the Shell', 2017, 'Rupert Sanders']`

 We would need to remember the order of the indices:

 - 0: Title
 - 1: Year released
 - 2: Director

 Not very convenient! We need objects!

 #### Objects

* Objects are data structures that allow us to store related properties of each element
* Objects are made up of key/value pairs
* The key in an object is always a string
* The value can be any valid JavaScript value (primitive, array, object, or function)

``` js
const movie = {
    title: 'Ghost in The Shell',
    year_released: 2017,
    director: 'Rubert Sanders'
}
```

### Passing Values to Functions 

Passed by Value / Passed by Reference

* primitive types => value types
* object types => reference types

Primitive types are passed by value => the value is copied. It does not modify the original.

``` js
let title = "The Expanse";

const setTitle = function(title) {
    title = 'Inception';
}

setTitle(title);

console.log(title);
```

Object types are passed by reference => the reference is copied. It does modify the original object!

``` js
const movie = {
    title: 'Ghost in the shell',
    year_released: 2017,
    director: 'Rupert Sanders',
};

const setTitle = function(movie, newTitle) {
    movie.title = newTitle;
}

setTitle(movie, 'Inception');

console.log(movie);
```

##### How to read the values from an object

* we can use bracket or dot notations:

`objectName['key']` or `objectName.key`

``` js
console.log(movie.title);
console.log(movie.year_released);
console.log(movie.director);

console.log(movie['title']);
console.log(movie['year_released']);
console.log(movie['director']);
```

We can __only__ use bracket [] notation when the key is stored in a variable:

``` js
const keyName = 'title'; // key name stored in a variable
console.log(movie[title]); // prints 'Ghost in the Shell'
console.log(movie.title); // prints undefined
console.log(movie['title']); // prints undefined
```

##### How to set values in an object

We can set a value with the following syntax:

 `objectName.key = value`

``` js
movie.rating = 6.3; // primitive type
movie.genres = ['action', 'crime', 'drama'] // none primitive type;
```

Using an existing key name is overwriting the value:

 `movie.title = 'Tenet' // we're changing the title`

We can even add a function:

``` js
movie.printDetails = function() {
    console.log(
        `Title: ${this.title} - Year Released: ${this.year_released} - Director: ${this.director} - Rating: ${this.rating} - Genres: ${this.genres}`
    );
};

movie.printDetails(); // calling our function
```

`this` refer to the `movie` object; 

##### How to remove a key/value in an object

 `delete movie.rating`

##### Looping through the properties of an object

* for...in loop
* Object.keys, Object.values, Object.entries

``` js
const movie = {
    title: 'Ghost in the shell',
    year_released: 2017,
    director: 'Rupert Sanders',
    rating: 6.3,
    genres: ['action', 'crime', 'drama']
};

for (let key in movie) {
    console.log(key); // prints the key
    console.log(movie[key]) //prints the value
}
```

``` js
const keys = Object.keys(movie);
const values = Object.values(movie);

console.log(keys);
console.log(values);

for (let val of values) {
    console.log(val);
}
```

##### Looping through an array of objects

``` js
const movies = [{
        title: 'Tenet',
        year: 2020,
        runtime: '150 min',
        genre: ['Action', 'Sci-Fi', 'Thriller'],
        director: 'Christopher Nolan',
        actors: ['John David Washington', 'Robert Pattinson', 'Elizabeth Debicki'],
    },
    {
        title: 'Ghost in the Shell',
        year: 2017,
        runtime: '107 min',
        genre: ['Action', 'Crime', 'Drama'],
        director: 'Rupert Sanders',
        actors: ['Scarlett Johansson', 'Pilou Asbæk', 'Takeshi Kitano'],
    },

    {
        title: 'Joker',
        year: 2019,
        runtime: '122 min',
        genre: ['Crime', 'Drama', 'Thriller'],
        director: 'Todd Phillips',
        actors: [
            'Joaquin Phoenix',
            'Robert De Niro',
            'Zazie Beetz',
            'Frances Conroy',
        ],
    },
    {
        title: 'Captain Marvel',
        year: 2019,
        runtime: '123 min',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Anna Boden',
        actors: ['Brie Larson', 'Samuel L. Jackson', 'Ben Mendelsohn', 'Jude Law'],
    },

    {
        title: 'John Wick: Chapter 3 - Parabellum',
        year: 2019,
        runtime: '131 min',
        genre: ['Action', 'Crime', 'Thriller'],
        director: 'Chad Stahelski',
        actors: [
            'Keanu Reeves',
            'Halle Berry',
            'Ian McShane',
            'Laurence Fishburne',
        ],
    },
];

// getting the total runtime of the movies
let totalRuntime = 0;

for (let movieObj of movies) {
    totalRuntime += parseInt(movieObj.Runtime);
}

console.log(totalRuntime);
```
