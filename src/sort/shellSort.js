function shellSort(nums) {
  const len = nums.length;
  let gap = 1;
  while (gap < len) {
    gap = gap * 3 + 1;
  }

  for(gap; gap = Math.floor(gap / 3); gap > 0) {
    for(let i = gap; i < len; i ++) {
      let tempIndex = i - gap;
      let ele = nums[i];
      while(tempIndex >= 0 && ele < nums[tempIndex]) {
        nums[tempIndex + gap] = nums[tempIndex];
        tempIndex = tempIndex- gap;
      }
      console.log(tempIndex, gap, nums);
      nums[tempIndex + gap] = ele;
    }
  }
  return arr
}

const arr = [2, 1, 6,4]
console.log(shellSort(arr))