var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello jay",
  "DRINK water",
  "tree in the field",
  "phone call",
  "jasxc fdkms"
]

let outputs = [
  "Hello Jay",
  "Drink Water",
  "Tree In The Field",
  "Phone Call",
  "Jasxc Fdkms"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    var min = str.toLowerCase();
    var newArray = min.split(" ");
    for(i = 0; i < newArray.length; i++){
         newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].substr(1);
    } return newArray.join(" ");
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

