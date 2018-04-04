var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["hat", 2],
  ["bag", 4],
  ["water", 1],
  ["cast", -1],
  ["class", 3],
  ["fun", 7],
  ["math", 2]
]

let outputs = [
  "hathat",
  "bagbagbagbag",
  "water",
  undefined,
  "classclassclass",
  "funfunfunfunfunfunfun",
  "mathmath"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    if(typeof arr[0] !== "string" || arr[1] <= 0) {
        return undefined;
    }  return arr[0].repeat(arr[1]);
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
runTest(5);
runTest(6);

