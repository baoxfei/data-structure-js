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