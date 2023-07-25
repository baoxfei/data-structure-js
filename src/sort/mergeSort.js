// function mergeSort(arr) {
//   const len = arr.length;
//   if (len < 2) return arr;
//   const middle = Math.floor(len / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);
//   return merge(mergeSort(left), mergeSort(right))
// }


// function merge(left, right) {
//   const temp = [];
//   while(left.length && right.length) {
//     if (left[0] < right[0]) {
//       temp.push(left.unshift());
//     } else {
//       temp.push(right.unshift());
//     }
//   }
//   while(left.length) {
//     temp.push(left.unshift())
//   }
//   while(right.length) {
//     temp.push(right.unshift())
//   }
//   return temp;
// }

function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
      return arr;
  }
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, len);
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const arr = [];
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
        arr.push(left.shift())
    } else {
        arr.push(right.shift())
    }
  }
  while(left.length) {
      arr.push(left.shift())
  }
  while(right.length) {
      arr.push(right.shift())
  }
  return arr
}

const arr1 = [1,4,2,6, 22, 15]

console.log(mergeSort([2,1,5,2]));
// console.log(mergeSort(arr1));


