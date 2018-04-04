function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
square(decrement(square(decrement(3))))
var dec = decrement(3);
var sqr = square(dec);
var dec2 = decrement(sqr);
var sqr2 = square(dec2);
var result = sqr2;
console.log(result);
// #2
decrement(decrement(square(square(3))))
var sqr = square(3);
var sqr2 = square(sqr);
var dec = decrement(sqr2);
var dec2 = decrement(dec);
var result = dec2;
console.log(result);
// #3
duplicateString(reverseString("hello"))
var reverse = reverseString("Hello");
var duplicate = duplicateString(reverse);
var result = duplicate;
console.log(result);

// #4
reverseString(duplicateString(duplicateString("foo")))
var duplicate = duplicateString("foo")
var doubleDuplicate = duplicateString(duplicate);
var reverse = reverseString(doubleDuplicate);
var result = reverse;
console.log(result);
