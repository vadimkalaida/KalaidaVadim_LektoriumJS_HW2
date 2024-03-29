let myArray = [3,0,-5,NaN,1,44,null, undefined, 'hello',-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
let numberArray = [];
let resultsArray = [];

function makeCorrectArray(arr) {
  arr.forEach(function (i) {
    let thisItem = parseInt(i);
    if(!isNaN(thisItem)) {
      numberArray.push(thisItem);
    } else {
      delete thisItem;
    }
  });
  return numberArray;
}

makeCorrectArray(myArray);

let myMax = numberArray.reduce(function(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
});

let myMin = numberArray.reduce(function(a, b) {
  if(a < b) {
    return a;
  } else {
    return b;
  }
});

let mySum = numberArray.reduce(function(a, b) {
    return a + b;
});

console.log('Max = ', myMax);
resultsArray.push(myMax);
console.log('Min = ', myMin);
resultsArray.push(myMin);
console.log('Sum = ', mySum);
resultsArray.push(mySum);

console.log('Замінив деякі елемнети в массиві')

numberArray.splice(2, 2, 58);
numberArray.splice(3, 3, -58);

let myMax2 = numberArray.reduce(function(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
});

let myMin2 = numberArray.reduce(function(a, b) {
  if(a < b) {
    return a;
  } else {
    return b;
  }
});

let mySum2 = numberArray.reduce(function(a, b) {
  return a + b;
});

console.log('Max = ', myMax2);
resultsArray.push(myMax2);
console.log('Min = ', myMin2);
resultsArray.push(myMin2);
console.log('Sum = ', mySum2);
resultsArray.push(mySum2);

let myObj = {};

function resultsArrayToObject(arr, obj) {
  for(let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
}

resultsArrayToObject(resultsArray, myObj);
console.log('Об\'єкт з результатами: ', myObj);
