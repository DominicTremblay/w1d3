// addr: #A3D2F4
let obj1 = {
  a:1,
  b:2
}

// addr: #F3E4A5 => #A3D2F4
let obj2 = {};

obj2 = obj1;

console.log(obj1, obj2);

obj2.a = 3;

obj1.b = 4;



console.log(obj1, obj2);

console.log(obj1 === obj2); // true

// make a duplicate

// obj2 = Object.assign({}, obj1); // or
obj2 = {...obj1}; // spread operator
obj2.a = 9;
console.log(obj1, obj2);