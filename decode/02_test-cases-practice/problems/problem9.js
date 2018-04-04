var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hello world",
  "parked car",
  "",
  "phone call",
  "ten"
]

let outputs = [
  "world",
  "parked",
  undefined,
  "phone",
  "ten"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var newArray = str.split(" ");
    var longestWord = "";
    if(str === ""){
        return undefined;
    }
    for(var i = 0; i < newArray.length; i++){
        if(newArray[i].length >= longestWord.length){
            longestWord = newArray[i];
        }
    } return longestWord;
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

