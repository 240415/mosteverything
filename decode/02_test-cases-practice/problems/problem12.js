var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [[1,3,4,5], [0,4,2]],
  [[1,2,6,7], [1,2,3]],
  [[1,4,6], [1,4,5]],
  [5,3],
  [[5,8,73], [1,4,6,9]]
]

let outputs = [
  [1,3,5,0,2],
  [6,7,3],
  [6, 5],
  undefined,
  [5,8,73,1,4,6,9]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,2,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function f(arr1, arr2) {
    /*var newArray = [];
    // ([1,3,4,5], [0,4,2]),
    for (var i = 0; i < arr1.length; i++){
        // i = 0
        for( var j = 0; j < arr2.length; j++){
            // j = 0
            if ( arr2.indexOf(arr1[i]) === -1 ){
                newArray.push(arr[i]);
            }
            //if(arr1[i] !== arr2[j]){
            //    newArray.push(arr[i]);
            //}
        } return newArray
    }*/
    var newArray = [];
    console.log(arr1,arr2);
    for(var i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1 ){
            newArray.push(arr1[i]);
        }
    }
    for(var i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1 ){
            newArray.push(arr2[i]);
        }
    }
    return newArray; 
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);


