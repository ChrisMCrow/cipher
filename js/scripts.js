var cap = function(str){
  return (str.charAt(0) + str.charAt(str.length-1)).toUpperCase();
};

var reverseOrder = function(str) {
  return (str.charAt(str.length-1) + str.charAt(0));
};

var multiFunction = function(str) {
  return str + reverseOrder(cap(str));
};

var function4 = function(str) {
  return str.charAt(Math.floor(str.length / 2)) + multiFunction(str);
};

var bonus = function(function4(str)) {
  var split = str.split("");
  var reversedString = split.reverse();
  var result = reversedString.join("");
  return = result;
};

var sentence = prompt("Enter a sentence: ");

alert(bonus(sentence));
