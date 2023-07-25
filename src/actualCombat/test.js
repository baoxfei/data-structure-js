/**
 * @param {number} n
 * @return {string[]}
 * @param l 左括号已经⽤了⼏个
 * @param r 右括号已经⽤了⼏个
 * @param str 当前递归得到的拼接字符串结果
 * @param res 结果集
 */
 const generateParenthesis = function (n) {
  const res = [];
  function dfs(l, r, str) {
      console.log(l, r, str)
  if (l == n && r == n) {
  return res.push(str);
  }
  // // l ⼩于 r 时不满⾜条件 剪枝
  // if (l < r) {
  // return;
  // }
  // l ⼩于 n 时可以插⼊左括号，最多可以插⼊ n 个
  if (l < n) {
  dfs(l + 1, r, str + "(");
  }
  // r < l 时 可以插⼊右括号
  if (r < l) {
  dfs(l, r + 1, str + ")");
  }
  }
  dfs(0, 0, "");
  return res; };
 
 generateParenthesis(3)