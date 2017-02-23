// Accept array atribute and print that array in reverse order
function printReverse(arr) {
  for(var i = arr.length -1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
// Or you can use just .reverse() method

// Return true if all item in array is indentical
function isUniform(arr) {
  var firstItem = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if (firstItem !== arr[i]) {
      return false;
    }
  }
  return true;
}

// Sum up array's items
function sumArray(arr) {
  var result = 0;
  arr.forEach(function(i) {
    result += i;
  });
  return result;
}

// Return max value
function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}
