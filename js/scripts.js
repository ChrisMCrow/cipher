var cap = function(str){
  return (str.charAt(0) + str.charAt(str.length-1)).toUpperCase();
};

var reverseOrder = function(str) {
  return (str.charAt(str.length-1) + str.charAt(0));
};

var multiFunction = function(str) {
  return str + reverseOrder(cap(str));

}
var sentence = prompt("Enter a sentence: ");

alert(multiFunction(sentence));
