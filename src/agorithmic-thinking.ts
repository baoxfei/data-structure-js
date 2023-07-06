// 动态规划

function getMinCoin(coins: number[], value: number) {
  if (!value) return [];
  const cache = {}
  const makeChange = (newAmount) => {
    let min: number[] = [];
    if (!newAmount) return [];
    if (cache[newAmount]) return cache[newAmount];
    for(let i = 0; i < coins.length; i ++) {
      const newMinValue = newAmount - coins[i];
      let newCoins: number[] = [];
      if (newMinValue >= 0) {
        newCoins = makeChange(newMinValue);
        console.log(i, newMinValue, newCoins, 'newMinValue', newAmount, coins[i]);
        newCoins.push(coins[i])
        if (((newCoins.length && cache[newAmount]?.length) && newCoins.length < cache[newAmount]?.length) || !cache[newAmount]?.length) {
          min = newCoins
        }
      }
    }
    
    cache[newAmount] = min
    console.log(cache)
    return cache[newAmount] || [];
  }
  return makeChange(value)
}


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

// 输入两个链表，找出它们的第一个公共结点

function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    let p1 = pHead1,p2 = pHead2;
    while (p1 !== p2) {
        p1 = p1 === null ? pHead2 : p1.next;
        p2 = p2 === null ? pHead1 : p2.next;
    }
    return p1;
}
// 方法1 直接遍历 
// 方法2 利用Map 2n
function findFirstCommonNode(pHead1, pHead2) {

}


// 反转链表

// function reverseList(pHead) {
//   let temp = null;
//   let node = pHead;
//   let pre = null;
//   if (!pHead) return null
//   while(node.next) {
//     temp = node;
//     node = node.next;
//     temp!.next = pre;
//   }
//   return temp;
// }


// 复杂链表的复制
// 请实现一个函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。


class RandomListNode {
  constructor( public value: string, public next?: string, public random?: string) {}
}


function cloneLinkList(pHead) {
  if (!pHead) return;
  let p1 = pHead;
  while(p1.next) {
    
  }
}





// function Clone(pHead)
// {
//     // write code here
//     if(pHead === null) return pHead;
//     let p1 = pHead;
//     while(p1 !== null){
//         let node = new RandomListNode(p1.label);
//         node.next = p1.next;
//         p1.next = node;
//         p1 = node.next;
//     }
//     p1 = pHead;
//     while(p1 !== null){
//         let node = p1.next;
//         if(p1.random) node.random = p1.random.next;
//         p1 = node.next;
//     }
//     p1 = pHead;
//     let p2 = pHead.next;
//     while(p1.next !== null){
//         let node = p1.next;
//         p1.next = node.next;
//         p1 = node;
//     }
//     return p2;
// }


// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字
function printClockwise(matrix) {
  if(matrix?.length === 0) return [];

}

// function rotate(arr){
//   if(!arr.length) return [];
//   const newArr = [];
//   for(let i = 0;i < arr[0].length;i++){
//       const temp = [];
//       for(let j = 0;j < arr.length;j++){
//           temp.push(arr[j][arr[0].length-1-i]);
//       }
//       newArr.push(temp);
//   }
//   return newArr;
// }

// function printMatrix(matrix)
// {
//   if(!matrix.length) return [];
//   const ans = [];
//   while(matrix.length){
//       for(let i = 0;i < matrix[0].length;i++){
//           ans.push(matrix[0][i])
//       }
//       matrix.splice(0,1);
//       matrix = rotate(matrix);
//   }
//   return ans;
// }

// // const rotate = (matrix) => {
// //   for(let i = 0; i < matrix.length; i ++) {
// //     matrix[i].reverse();
// //   }
// //   return matrix.reverse();
// // }
//   // 存在错误
// const print = (matrix: Number[][], printArr = []) => {
//   if (matrix.length === 0) return printArr;
//   const len = matrix.length;
//   if (len) {
//     for(let i = 0; i < len; i ++) {
//       if (matrix[i].length > 0) {
//         const v = matrix[i].unshift();
//         printArr.push(v)
//       }
//     }
//     const v = matrix[len - 1].pop();
//     printArr.push(...v);
//     const newM = rotate(matrix);
//     print(newM, printArr)
//   }
//   return printArr
// }


// 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵
// todo 


// 给定一个 n × n 的二维矩阵表示一个图像。

// 将图像顺时针旋转 90 度

function rotate(matrix) {
  const rowLen = matrix[0].length; // 横向
  const colLen = matrix.length; // 纵向
  const temp: number[][] = [];
  for(let i = 0; i < colLen; i ++) {
    temp[i] = [];
  }
  for(let i = 0; i < rowLen; i ++) {
      for(let j = 0; j < colLen; j ++) {
        temp[i][j] = matrix[j][i]
      }
  }
  return temp;
}


// var rotate = function(matrix) {
//   if(!matrix.length) return [];
//   let left = 0,right = matrix.length-1;
//   while(right-left > 0){
//       [matrix[left],matrix[right]] = [matrix[right],matrix[left]];
//       left++;
//       right--;
//   }
//   for(let i = 0;i < matrix.length;i++){
//       for(let j = i+1;j < matrix[i].length;j++){
//           [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
//       }
//   }
//   return matrix;
// };


console.log(rotate([[1,2, 3], [4, 5, 6], [7, 8, 9]]));







// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用**原地**算法

function setZeroes(matrix: number[][]) {
  const colSet = new Set<number>([]);
  const rowSet = new Set<number>([]);
  const m = matrix.length;
  const n = matrix[0].length;
  for(let i = 0; i < m; i ++) {
    for(let j = 0; i < n; j ++) {
      if (matrix[i][j] === 0) {
        colSet.add(j)
        rowSet.add(i);
      }
    }
  }
  for(let i = 0; i < m; i ++) {
    for(let j = 0; i < n; j ++) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}




const longestCommonPrefix = (strs: string[]) => {
  if (!strs.length) return ''
  const sortStrs = strs.sort((a, b) => a.length - b.length);
  let s = sortStrs[0]
  let i

  for(i = 0; i < s.length; i ++) {
    const c = s[i];
    if (!sortStrs.every(n => n[i] === c)) break;
  }
  return s.substring(0, i)
}


// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型
// 1. 用出入栈进行模拟
// 2. 进队列全部添加到入栈中
// 3. 出队列检查出栈是否为空，不为空则将栈顶元素出栈；为空则先将入栈中的所有元素压入出栈

function Queue<T>() {
  let in_stack: T[] = [],out_stack: T[] = [];

  function push(value: T) {
    in_stack.push(value)
  }
  
  function pop(): T {
    if (out_stack.length === 0) {
      // for循环 可以多多用用while
      for(let i = 0; i < in_stack.length; i ++) {
        out_stack.push(pop())
      }
    }
    return out_stack.unshift() as T;
  }
}

// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1

class Stack<T> {
  public stack: T[] = [];
  public min: T;
  constructor() {
  }
  push(value) {
    if (!this.min) {
      this.min = value;
    } else if (value < this.min) {
      this.min = value;
    }
    this.stack.push(value)
  }
  pop() {
    return this.stack.pop()
  }
  minNum() {
    return this.min
  }
}


















