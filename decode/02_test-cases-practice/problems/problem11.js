var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [1, 2, 3],
  [2, 5, 8],
  [1, "a", 5],
  [],
  [1, 7, 8]
]

let outputs = [
  6,
  15,
  6,
  0,
  16
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if( typeof arr[i] === "number") {
            sum += arr[i];
        }
    } 
    console.log(sum);
    return sum;
    
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

