const fibonacci = function (num) {
  if (typeof num === "string") {
    num = parseInt(num);
  } if (num < 0) return "OOPS";
  else if (num === 0 || num === 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
