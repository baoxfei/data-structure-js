function bucketSort(nums, s) {
  const len = nums.length;
  const size = s || Math.ceil(len / 5);
  const bSize = Math.floor(len / size);
  // 我终于明白了
  // const bucketArr = new Array(size).map(new Array());
  const bucketArr = new Array(size).map(() => new Array())
  const temp = []
  for(let i = 0; i < len; i ++ ) {
    bucketArr[Math.floor( i / bSize)].push(nums[i]);
  }
  console.log(bucketArr);
  for(let i = 0; i < size; i ++) {
    bucketArr[i].sort((a, b) => a - b);
    temp.push(...bucketArr[i])
  }
  return temp;
}

console.log(bucketSort([1,10,6,3,8, 20, 15, 10]))