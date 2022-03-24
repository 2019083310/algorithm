var isValid = function (s) {
  var n = s.length;
  if (n % 2 == 1) {
    return false; //判断数组长度是否为偶数
  }
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let a = s[i]; //当前元素
    switch (a) {
      case '(':
        stack.push(a);
        break;
      case '{':
        stack.push(a);
        break;
      case '[':
        stack.push(a);
        break;
      default: //遇到右括号时判断栈的长度是否为0
        if (hash[stack.pop()] !== a) {
          return false;
        }
    }
  }
  return !stack.length;
};
var b = ['(', ')','{','}'];
console.log(isValid(b));