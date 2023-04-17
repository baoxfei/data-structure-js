// 动态规划

// function getMinCoin(coins: number[], value: number) {
//   if (!value) return [];
//   let min: number[] = [];
//   const cache = {}
//   const makeChange = (newAmount) => {
//     if (!newAmount) return [];
//     if (cache[newAmount]) return cache[newAmount];
//     for(let i = 0; i < coins.length; i ++) {
//       const newMinValue = newAmount - coins[i];
//       let newCoins: number[] = [];
//       if (newMinValue >= 0) {
//         newCoins = makeChange(newMinValue);
//         console.log(i, newMinValue, newCoins, 'newMinValue', newAmount, coins[i]);
//         newCoins.push(coins[i])
//         if (((newCoins.length && cache[newAmount]?.length) && newCoins.length < cache[newAmount]?.length) || !cache[newAmount]?.length) {
//           min = newCoins
//         }
//       }
//     }
    
//     cache[newAmount] = min
//     console.log(cache)
//     return cache[newAmount] || [];
//   }
//   return makeChange(value)
// }

// console.log(getMinCoin([1,3,4], 6))

// [2,3,1,2,4,3] 2
// function getMinLength(arr, s) {
//   if (!arr.length) return 0;
//   let start = 0; let end = 0;
//   const cache: Array<{ start: number; length: number }> = [];
//   let isUpper = false
//   while(end < arr.length) {
//     const startValue = arr[start]
//     const endValue = arr[end];
//     if (isUpper) {
//       if (endValue >= s) {
//         const i = cache.findIndex(n => n.start === start)
//         cache[i].length ++;
//       } else {
//         start = end;
//         isUpper = false
//       }
//     } else {
//       if (startValue >= s) {
//         isUpper = true;
//         cache.push({ start, length: 1 })
//       }
//     }
//     end ++;
//   }

//   return Math.min(...(cache.map(n => n.length)))
// }


// console.log(getMinLength([2,3,1,2,4,3], 2))