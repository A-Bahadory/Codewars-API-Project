function removeChar(str) {
  if (str.length >= 2) {
    return str.substring(1, str.length - 1);
  } else {
    return str;
  }
}
//

function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function () {
      return this.objProperty;
    },
  };
  return myObject;
}
///
function ho(previousResult) {
  previousResult = previousResult || "";
  var currentResult = previousResult.trim() + "Ho ";
  return function (nextResult) {
    if (nextResult) {
      return ho(currentResult)(nextResult);
    }
    return currentResult.trim() + "!";
  };
}
// console.log("test--->", ho()());
// //console.log("test2-->", ho()());
// console.log(ho()(ho()(ho())())());
var health = 100;
var position = 0;
var coins = 0;

function main() {
  //getCoins();
  move();
  printStatus();
  combat();
  rolDice();
  attack();
}
console.log(main());
