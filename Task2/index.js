let arr1 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6],
  arr2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
  arr3 = [7, 0, 1, 3, 4, 1, 2, 1],
  arr4 = [2, 2, 1, 2, 2, 3, 0, 1, 2],
  arr5 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8],
  arr6 = [2, 2, 2, 2, 2];

function water(arr) {

  let rightMax = 0,
    leftMax = 0,
    left = 0,
    right = arr.length - 1,
    part = 0;

  while(left < right) {
    if(arr[left] > leftMax) {
      leftMax = arr[left];
    }
    if(arr[right] > rightMax) {
      rightMax = arr[right];
    }
    if(leftMax >= rightMax) {
      part += rightMax - arr[right];
      right--;
    } else {
      part += leftMax - arr[left];
      left++;
    }
  }

  return part;

}

console.log(water(arr2));
console.log(water(arr3));
console.log(water(arr4));
console.log(water(arr5));
console.log(water(arr6));
