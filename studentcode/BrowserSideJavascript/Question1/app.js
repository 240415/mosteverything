var body = document.getElementsByTagName("body")[0];
var ret = false;
body.addEventListener("click", (function (){
    alert("You Won");
    ret = true;
}));
setTimeout((function (){
    if(!ret){
        alert("You lost");
    }
}), 1000);