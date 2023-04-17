// import defaultCompare from "./utils/compare";

// 顺序搜索


function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

function defaultDiff<T>(a: T, b: T): number {
  return Number(a) - Number(b);
}

// 二分搜索
// function binarySearch(arr, value) {
//   if (!arr.length) return;
//   const newArr = arr.sort((a, b) => a - b)
//   const search = (start, end) => {
//     const mid = Math.floor((start + end) / 2)
//     console.log(newArr, mid, value)
//     if (newArr[mid] === value) return mid;
//     if (start === end) return undefined;
//     if (value > newArr[mid]) {
//       return search(mid, end)
//     } else {
//       return search(start, mid)
//     }
//   }
//   return search(0, arr.length - 1)
// }
 enum Compare {
  LESS_THAN = -1,
  EQUALS = 0,
  BIGGER_THAN = 1
}

 function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function binarySearch(array, value) {
  const sortedArray = array.sort((a, b) => a - b);
  let low = 0, high = array.length -1;
  while(sortedArray[low] <= sortedArray[high]) {
    const mid = Math.floor((low + high) / 2)
    const ele = sortedArray[mid]
    if (ele > value) {
      high = mid - 1;
    } else if (ele < value) {
      low = mid + 1;
    } else {
      console.log(array, value, mid)
      return mid
    }
  }
  return undefined
}







console.log(binarySearch([2,3,7,2,3,9], 7))
// 内插搜索

function interpolationSearch(array, value) {
  const sortedArray = array.sort((a, b) => a - b);
  let low = 0, high = array.length -1, delta = -1;
  while(sortedArray[low] <= sortedArray[high]) {
    delta = (value - sortedArray[low]) / (sortedArray[high] - sortedArray[low])
    const mid = delta * (high - low)
    const ele = sortedArray[mid]
    if (ele > value) {
      high = mid - 1;
    } else if (ele < value) {
      low = mid + 1;
    } else {
      return mid
    }
  }
  return undefined
}