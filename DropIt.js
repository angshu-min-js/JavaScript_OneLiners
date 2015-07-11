function drop(arr, func) {
  // Drop them elements.
  return arr.filter(func);
}

drop([1, 2, 3], function(n) {return n < 3; });
