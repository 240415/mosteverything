var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];
var start = document.getElementById("message");
var reset = document.getElementById("reset");
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function resetFunction(){
    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset Game";
    reset.appendChild(resetButton);
    resetButton.addEventListener("click", () => window.location.reload());
}
var ret = false;
function eventClick(){
    if(!ret){
        alert("You won");
        ret = true; 
        body.removeEventListener("click", eventClick);
        resetFunction();
    }    
}
function eventKey(){
    if(!ret){
        alert("You won"); 
        ret = true; 
        document.body.onkeyup = null;
        resetFunction();
    }
}
function beginGame(){
    btn.style.display = "none";
    setTimeout(function(){
        start.innerHTML ="Round started"
        body.addEventListener("click", eventClick);
        document.body.onkeyup = function (x){
            if(x.keyCode == 32){
                eventKey()
            }
        }
        setTimeout(() => {
            if(!ret){
            alert("You lost");
            ret = true;
            resetFun();
            }
        }, 500);
    }, random(1000, 3000));
}

btn.addEventListener("click", beginGame);