function ListNode(value, next?) {
  this.value = value;
  this.next = next;
}

// 合并有序链表  递归
function mergeTwoLink(list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1
  if (list1.value < list2.value) {
    list1.next = mergeTwoLink(list1.next, list2)
  } else {
    list2.next = mergeTwoLink(list1, list2.next)
  }
}

const mergeTwoLists = function (l1, l2) {
  const prehead = new ListNode(-1);
  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 === null ? l2 : l1;
  return prehead.next;
};


// 判断是否是有效的括号
const LEFT = {
  '{': "}",
  "[": ']',
  '(': ')'
}

const RIGHT = {
  "}": '{',
  ']': '[',
  ')': '('
}

function isValid(s: string) {
  // 优化1: next-line
  if(s.length % 2 !== 0) return false

  let isV = true;
  const stack: string[] = [];
  for(let i = 0; i < s.length; i ++) {
    if (LEFT[s[i]]) {
      stack.unshift(s[i])
    } else {
      const rever = RIGHT[s[i]]
      if (rever !== stack.shift()) {
        isV = false
        break
      }
    }
  }
  return isV
}

// 回溯法 生成有效的括号
  
// 合并 K 个排序链表
// 88 合并两个有序数组
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 


// 交换相邻的节点

function swapListNode(l) {
  if (!l.next) return l
  const head = l.next;
  let current = l
  let pre: any = null
  while(current && current.next) {
    const temp = current.next;
    current.next = current.next.next
    temp.next = current
    if (pre) {
      pre.next = temp
    }
    pre = current
    current = current.next.next
  }
  return head
}

// 5. K 个⼀组翻转链表
// 给你⼀个链表，每 k 个节点⼀组进⾏翻转，请你返回翻转后的链表。
// k 是⼀个正整数，它的值⼩于或等于链表的⻓度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
// [1,2,3,4,5]
// 2
var reverseKGroup = function(pHead, k) {
  if (k === 1 || !pHead || !pHead.next) return pHead;
  let head = pHead
  if (k === 2) {
    const temp = head.next
    pHead.next = reverseKGroup(pHead.next.next, 2)
    temp.next = pHead
    return temp
  }
  let max = k - 1;
  // 2
  // [3,4,5]
  while(max > 0 && head.next) {
    head = head.next
    max --
  }
  // head 1 2 3
  // k 2 1 0
  // [1,2,3,4,5]
  if (max === 0) return head
  const temp = head
  let current, next, prev;

  prev = pHead // 1
  current = pHead.next // 2
  while(k >= 2) {
    next = current.next // 3
    current.next = prev // 1
    prev = current
    current = next;
    k --
  }
  pHead.next = reverseKGroup(temp.next, k)

  return head
};

// 反转链表
// head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

var reverseBetween = function(head, left, right) {
  if (left === 1 && right === 1) return head
  let current = 1;
  let leftNode = null;
  let rightNode = null;
  while(current <= right) {
    if (current === left - 1) {
      leftNode = 
    }
  }
};


//  删除排序数组中的重复项
const removeDuplicates = nums => {
  let len = nums.length
  if (len === 0 || len === 1) return
  let prev = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === undefined) break
    if (prev === nums[i]) {
      delete nums[i]
      // step(i)
      len--
    } else {
      prev = nums[i]
    }
  }
  let l = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== undefined) {
      nums.splice(l, 1, nums[i])
      l++
    }
  }
  return len
}

// 优化版排序数组

const removeDuplicates2 = nums => {
  const size = nums.length
  if (size === 0 || size === 1) return
  let slowP = 0
  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (nums[fastP] !== nums[slowP]) {
      slowP++
      nums[slowP] = nums[fastP]
    }
  }
  return slowP + 1
}


// /**
//  * @param {number} dividend
//  * @param {number} divisor
//  * @return {number}
//  */
//  var divide = function (dividend, divisor) {
//   if (dividend === 0) return 0
//   let isNegative = false
//   if (dividend < 0) {
//     isNegative = true
//     dividend = dividend - dividend - dividend
//   }
//   if (divisor < 0) {
//     if (isNegative) {
//       isNegative = false
//     }
//     divisor = divisor - divisor - divisor
//   }
//   let discuss = 0
//   let diff = dividend
//   while (diff >= divisor) {
//     diff = diff - divisor
//     discuss++
//   }
//   if (isNegative) {
//     discuss = discuss - discuss - discuss
//   }
//   return discuss
// }

// var removeDuplicates = function (nums) {
//   const size = nums.length
//   if (size == 0) return 0
//   let slowP = 0
//   for (let fastP = 0; fastP < size; fastP++) {
//     if (nums[fastP] !== nums[slowP]) {
//       slowP++
//       nums[slowP] = nums[fastP]
//     }
//   }
//   return slowP + 1
// }


