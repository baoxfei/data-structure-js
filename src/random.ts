/**
 * @description: 随机算法
 * @return {*}
 */


// function shuffle(array) {
//   for (let index = array.length - 1; index > 0; index--) {
//     const randomIndex = Math.floor(Math.random() * index);
//     [array[randomIndex], array[index]] =  [array[index], array[randomIndex]]
//     // [array[randomIndex], array[index]] = [array[index], array[randomIndex]]
//   }
//   return array
// }

function shuffle(array) {
  return array.sort((a, b) => {
    return Math.random() - 0.5
  })
}

console.log(shuffle([1,2,3,4,5]))



