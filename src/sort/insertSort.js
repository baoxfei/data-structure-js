function insertSort(nums) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    let tempIndex = index - 1;
    while(tempIndex >= 0 && element < nums[tempIndex]) {
      nums[tempIndex + 1] = nums[tempIndex];
      tempIndex --;
    }
    nums[tempIndex + 1] = element;
  }
  return arr;
}

const arr = [1, 3, 2];
console.log(insertSort(arr), insertSort(arr) === arr);