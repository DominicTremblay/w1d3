const title ='The Lord of the Ring';
console.log(typeof title); //string
const nbRings =20; 
console.log(typeof nbRings); // number
const nbRingsHumans = 9/20; // number
console.log(typeof nbRingsHumans);

const allIsLost = false; // boolean
console.log(typeof allIsLost);

const fellowship = null; // object from the inital version of js
console.log(typeof fellowship);

let whoIsGullum; // undefine
console.log(whoIsGullum);

const sword = Symbol('sword'); // symbol
console.log(typeof sword);

// symbols creates unique string reference
const symb1 = Symbol('a');
const symb2 = Symbol('a');

console.log(symb1 === symb2); // false