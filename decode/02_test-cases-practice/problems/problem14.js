var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  "but also the leap into electronic typesetting, remaining essentially unchanged make a type specimen book. It has sur",
  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
]

let outputs = [
  "Lorem Ipsum is simply dummy text of the\
  printing and type setting industry.",
  "When an unknown printer took a galley of\
  type and scrambled it to make a type spe\
  cimen book. It has survived not only fiv\
  e centuries,",
  "but also the leap into electronic typese\
  tting, remaining essentially unchanged m\
  ake a type specimen book. It has sur",
  "It was popularised in the 1960s with the\
  release of Letraset sheets containing Lo\
  rem Ipsum passages, and more recently wi\
  th desktop",
  "It is a long established fact that a rea\
  der will be distracted by the readable c\
  ontent of a page when looking at its lay\
  out."
]

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

 even though there is a space before the a in adipisicing
*/
function f(str) {
    var split = str.split("");
    var newArray = [];
    for(var i = 0; i < split.length; i++){
        newArray.push(split[i]);
        if(i = 0 && i % 40 === 0 === split[i]=== " "){
            
        }
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

