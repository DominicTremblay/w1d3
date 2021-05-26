const movie = {
  title: 'Tenet',
  year_released: 2020,
  director: 'Christopher Nolan',
  genre: ['action', 'thriller'],
};

const findValue = 2020;


// with Object.keys
const findKey = function(value, obj) {

  // loop through the objec properties
  const keys = Object.keys(obj);
  
  for (let key of keys) {
      // console.log("key", key, "value", obj[key]);
      // check if if the value we're looking for
      // if yest return the key
      if (obj[key] === value) {
        return key;
      }
  }
 
  return false;
  // if not found return false
}

// for in
// allows to loop through the keys
const findKeyObj = function(value, obj) {


  for (let key in obj) {
    console.log("key", key, "value:", obj[key]);
    if (obj[key] === value) {
      return key;
    }
  }
  return false;

}



// const result = findKey(2020, movie);
const result = findKeyObj(2020, movie);
console.log("result:", result);

