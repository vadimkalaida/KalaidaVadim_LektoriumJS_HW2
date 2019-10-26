let myArray = [3,0,-5,NaN,1,44,null, undefined, 'hello',-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1],
  numberArray = [],
  resultsArr = [],
  resultsObj = {},
  myMax,
  myMin,
  mySum;

function makeCorrectArray(arr) {
  numberArray = arr.filter(Number);
}

makeCorrectArray(myArray);

function findMax(arr) {

  myMax = arr.reduce(function(a, b) {
    if(a > b) {
      return a;
    } else {
      return b;
    }
  }, 0);
  resultsArr.push(myMax);
  return 'Max = ' + myMax;
}

function findMin(arr) {
  myMin = arr.reduce(function(a, b) {
    if(a < b) {
      return a;
    } else {
      return b;
    }
  }, 0);
  resultsArr.push(myMin);
  return 'Min = ' + myMin;

}

function findSum(arr) {
  mySum = arr.reduce(function(a, b) {
    return a + b;
  }, 0);
  resultsArr.push(mySum);
  return 'Sum = ' + mySum;

}

function changeValue(arr, i, val) {
  arr[i] = val;
  return 'Array with new value: ' + arr;
}

function pushToObj(obj, resultsArr) {
  for(let i = 0; i < resultsArr.length; i++) {
    obj[i] = resultsArr[i];
  }
  return obj;
}

console.log('\'numberArray\' - valid array');
console.log('\'resultsArr\' - max, min, sum will be pushed in this array');
console.log('\'resultsObj\' - object with results');
console.log('\'findMax(nameOfArray)\' - find max in array');
console.log('\'findMin(nameOfArray)\' - find min in array');
console.log('\'findSum(nameOfArray)\' - find sum in array');
console.log('\'changeValue(nameOfArray, index, value)\' - change value in array');
console.log('\'pushToObj(nameOfObject, nameOfResultsArray)\' - push array with results to object');