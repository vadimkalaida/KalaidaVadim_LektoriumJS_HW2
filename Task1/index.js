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

Array.prototype.findMax = function() {

  myMax = this.reduce(function(a, b) {
    if(a > b) {
      return a;
    } else {
      return b;
    }
  }, 0);
  resultsArr.push(myMax);
  return 'Max = ' + myMax;
}

Array.prototype.findMin = function() {
  myMin = this.reduce(function(a, b) {
    if(a < b) {
      return a;
    } else {
      return b;
    }
  }, 0);
  resultsArr.push(myMin);
  return 'Min = ' + myMin;

}

Array.prototype.findSum = function() {
  mySum = this.reduce(function(a, b) {
    return a + b;
  }, 0);
  resultsArr.push(mySum);
  return 'Sum = ' + mySum;

}

Array.prototype.changeValue = function(i, val) {
  this[i] = val;
  return 'Array with new value: ' + this;
}

Array.prototype.pushToObj = function(obj, resultsArr) {
  for(let i = 0; i < resultsArr.length; i++) {
    obj[i] = resultsArr[i];
  }
  return obj;
}

console.log('\'numberArray\' - valid array');
console.log('\'resultsArr\' - max, min, sum will be pushed in this array');
console.log('\'resultsObj\' - object with results');
console.log('\'findMax()\' - find max in array');
console.log('\'findMin()\' - find min in array');
console.log('\'findSum()\' - find sum in array');
console.log('\'changeValue(index, value)\' - change value in array');
console.log('\'pushToObj(nameOfObject, nameOfResultsArray)\' - push array with results to object');