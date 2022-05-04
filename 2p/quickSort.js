class ArrayList {
  constructor(numElements) {
    this.array = [];
    for (let i = 0; i < numElements; ++i) {
      this.array[i] = 0;
    }
    this.numElements = numElements;
  }
  toString() {
    return array.join();
  }
  insert(item) {
    array.push(item);
  }
  setData() {
    for (let i = 0; i < this.numElements; ++i) {
      this.array[i] = Math.floor(Math.random() * this.numElements + 1);
    }
  }
  clear() {
    for (let i = 0; i < this.array.length; ++i) {
      this.array[i] = 0;
    }
  }
  swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }
  quickSort() {
    this.quick(this.array, 0, this.array.length - 1);
  }
  quick(array, left, right) {
    let index;
    if (array.length > 1) {
      index = this.partition(array, left, right);
      if (left < index - 1) {
        pasosQuick++;
        this.quick(array, left, index - 1);
      }
      if (index < right) {
        pasosQuick++;
        this.quick(array, index, right);
      }
    }
  }
  partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        this.swap(array, i, j);
        pasosQuick++;
        i++;
        j--;
      }
    }
    return i;
  }
}

class CArray {
  constructor(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.gaps = [5, 3, 1];
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
    this.length = this.dataStore.length;
    for (let i = 0; i < numElements; ++i) {
      this.dataStore[i] = 0;
    }
  }
}

//Metodos de clase CArray
function mergeSort(arr = this.dataStore) {
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
      pasosMerge++;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
      pasosMerge++;
    }
    step *= 2;
  }
}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (let i = 0; i < rightArr.length - 1; ++i) {
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  pasosMerge++;
  for (let i = 0; i < leftArr.length - 1; ++i) {
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  leftArr[leftArr.length - 1] = Infinity; // a sentinel value
  let m = 0;
  let n = 0;
  for (let k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      pasosMerge++;
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
      pasosMerge++;
    }
  }
}
function setData() {
  for (let i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * 10000 + 1);
  }
}
function clear() {
  for (let i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}
function insert(element) {
  this.dataStore[this.pos++] = element;
}

const sort = new ArrayList(10000);
const nums = new CArray(10000);
const quick = new ArrayList(10000);
let pasosMerge = 0;
let pasosQuick = 0;
for (let i = 0; i < 10; i++) {
  quick.setData();
  nums.dataStore = quick.array.map((e) => {
    return e;
  });
  sort.array = quick.array.map((e) => {
    return e;
  });
  let start = new Date().getTime();
  quick.quickSort();
  let finish = new Date().getTime();
  let elapsed = finish - start;
  console.log("time Quick: " + elapsed + " ms");
  console.log("Pasos: " + pasosQuick);
  let startMerge = new Date().getTime();
  nums.mergeSort();
  let finishMerge = new Date().getTime();
  let elapsedMerge = finishMerge - startMerge;
  console.log();
  console.log("time Merge: " + elapsedMerge + " ms");
  console.log("Pasos: " + pasosMerge);
  let startSolve = new Date().getTime();
  sort.array.sort((a, b) => {
    return a - b;
  });
  let finishSolve = new Date().getTime();
  let elapsedSolve = finishSolve - startSolve;
  console.log();
  console.log("time Sort: " + elapsedSolve + " ms");
  console.log();
  nums.clear();
  pasosQuick = 0;
  quick.clear();
  pasosMerge = 0;
  sort.clear();
}
