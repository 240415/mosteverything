var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [1, 5],
  [2],
  [4, 6],
  [1, 2]

]

let outputs = [
  14,
  5,
  undefined,
  24,
  2
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
    if(arr.length < 2){
      return undefined;
    } return arr[0] * arr[1];
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