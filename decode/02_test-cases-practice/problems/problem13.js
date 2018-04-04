var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "kayak",
  "radar",
  "hello",
  "reker",
  "wer"
]

let outputs = [
  true,
  true,
  false,
  true,
  false
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    var tmp = str;
    var splitString = tmp.split("");
    var newString = ""
    for (var i = splitString.length - 1; i >= 0; i--){
        newString += splitString[i]
        } if(newString === tmp){
            return true;
        } else {
            return false;
        }
    }

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

