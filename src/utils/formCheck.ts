const checkNumber = (rule: any, value: any, callback: any) => {
  if (!value) {
    if (rule.required) {
      return callback("请输入数字");
    }
    return callback();
  }
  setTimeout(() => {
    if (isNaN(value)) {
      callback("请输入数字");
    } else {
      callback();
    }
  }, 100);
};
const checkLetter = (rule: any, value: any, callback: any) => {
  if (!value) {
    if (rule.required) {
      return callback("请输入字母");
    }
    return callback();
  }
  setTimeout(() => {
    if (isNaN(value)) {
      callback("请输入字母");
    } else {
      callback();
    }
  }, 100);
};
export { checkNumber, checkLetter };
