function quickSort(arr, left, right) {
  // const partitionIndex
  const leftIndex = typeof left === 'number' ? left : 0;
  // console.log(right); // right 可能为 0
  const rightIndex = typeof right === 'number' ? right : arr.length - 1;
  if (leftIndex < rightIndex) {
    const partitionIndex = partition(arr, leftIndex, rightIndex);
    quickSort(arr, leftIndex, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, rightIndex);
  }
  return arr
}

function partition(arr, leftIndex, rightIndex) {
  let pivotIndex = leftIndex + 1;
  const pivot = arr[leftIndex];
  for (let index = leftIndex + 1; index <= rightIndex; index++) {
    if (arr[index] < pivot) {
      [arr[pivotIndex], arr[index]] = [arr[index], arr[pivotIndex]];
      pivotIndex ++
    }
  }
  [arr[leftIndex], arr[pivotIndex - 1]] = [arr[pivotIndex - 1], arr[leftIndex]]
  return pivotIndex - 1;
}


console.log(quickSort([3,1,5,2]))