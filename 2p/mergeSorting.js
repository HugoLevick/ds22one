let pasos = 0;

function random() {
  return Math.floor(Math.random() * 10 + 1);
}
function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }
  var step = 1;
  var left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
      pasos++;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
      pasos++;
    }
    step *= 2;
  }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < rightArr.length - 1; ++i) {
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (var i = 0; i < leftArr.length - 1; ++i) {
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  leftArr[leftArr.length - 1] = Infinity; // a sentinel value
  var m = 0;
  var n = 0;
  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  console.log("left array - ", leftArr);
  console.log("right array - ", rightArr);
}
var nums = [];

for (let i = 0; i < 10; i++) {
  nums.push(random());
}

console.log(nums);
console.log();
var start = new Date().getTime();
mergeSort(nums);
var finish = new Date().getTime();
var elapsed = finish - start;
console.log();
console.log(nums);

console.log("time: " + elapsed + " ms");
console.log("Pasos: " + pasos);

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.gaps = [5, 3, 1];
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.setGaps = setGaps;
  this.shellsort = shellsort;
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  this.length = dataStore.length;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = 0;
  }
}
