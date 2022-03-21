$(document).ready(function () {
// initialize values
  var answer = 0;
  var prevNum = 0;
  var symbol = null;
  var curNum = "0";
  scrUp(answer);
// register click
  $(".button").on("click", function (evt) {
    var btnPush = $(this).html();
    console.log(btnPush);
// loop to determine "what to do" with different keys
// C and CE are basically boilerplate

    if (btnPush === "C") {
      answer = 0;
      curNum = "0";
// in other words, clear all numbers
    } else if (btnPush === "CE") {
      curNum = "0";
// clear just the current number
    } else if (btnPush === "back") {
// will do later
    } else if (btnPush === "+/-") {
      curNum *= -1;
    } else if (btnPush === ".") {
      curNum += ".";
// add decimal
    } else if (isNum(btnPush)) {

      if (curNum === "0") curNum = btnPush;
      else curNum = curNum + btnPush;
    } else if (isSymb(btnPush)) {
      prevNum = parseFloat(curNum);
      symbol = btnPush;
      curNum = "";
// yes I know it's a bit spaghetti
    } else if (btnPush === "%") {
      curNum = curNum / 100;
// easy enough

    } else if (btnPush === "1/x") {
      curNum = 1 / curNum;
    } else if (btnPush === "pi") {
      curNum = Math.PI;
// display pi on screen
    } else if (btnPush === "sqrt") {
      curNum = Math.sqrt(curNum);
// square root
    } else if (btnPush === "=") {
      curNum = calc(prevNum, curNum, symbol);
      symbol = null;
    }
// runs the calc function, displaying the answer

    scrUp(curNum);
  });
});

isSymb = function (value) {
  return value === "/" || value === "*" || value === "+" || value === "-";
};
// the function above determines whether a symbol/operator was selected

isNum = function (value) {
  return !isNaN(value);
};
// the function above determines if a "number" was selected

scrUp = function (displayValue) {
  var displayValue = displayValue.toString();
  $(".screen").html(displayValue.substring(0, 10));
};
// displays the current number/answer
calc = function (a, b, symbol) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, symbol);
  if (symbol === "+") return a + b;
  if (symbol === "-") return a - b;
  if (symbol === "*") return a * b;
  if (symbol === "/") return a / b;
};
// simple enough, basic arithmetic
