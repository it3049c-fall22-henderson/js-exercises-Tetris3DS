/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
function indexOf(arr, item) {
  return ;
}

// Sum: you should be able to sum the items of an array
// Example: arr = [1,2,3]   =>  6
function sum(arr) {
  return (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// Filter: Should filter out all instances of a value from an array
// Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
function filterOut(arr, item) {
  new_arr = arr.filter(item);
  return new_arr;
  //ask professor
}

// Append: you should be able to add an item to the end of an array
function append(arr, item) {
  arr = arr.splice(arr.length, 0, item);
  return arr;
  //ask professor
}

// Truncate: you should be able to remove the last item of an array
// hint: pop, slice, splice would all work. Pay attention to the return value in the docs
function truncate(arr) {
  return arr.splice(2);
  //ask professor
}

// Concat: you should be able to join together two arrays
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Insert: you should be able to add an item at the specified index of an array
// hint: use splice and pay attention to the return value
function insert(arr, item, index) {

  return arr.insert(item(index));
}

// Square: you should be able to square each number in an array
// hint: use .map
// Example: [1,2,4,5] => [1,4,16,25]
function square(arr) {
  return arr.map;
}

module.exports = {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};