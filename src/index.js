module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      if (str[i] === brackets[str[i]] && stack.includes(str[i])) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      if (brackets[stack.pop()] !== str[i]) return false;
    }
  }
  
  return stack.length === 0;
}
