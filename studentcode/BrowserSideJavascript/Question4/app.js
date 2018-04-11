var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];
var start = document.getElementById("message");
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var ret = false;
function eventClick(){
    if(!ret){
        alert("You won"); 
        ret = true; 
        body.removeEventListener("click", eventClick)
    }    
}
function eventKey(){
    if(!ret){
        alert("You won"); 
        ret = true; 
        document.body.onkeyup = null
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
            }
        }, 500);
    }, random(1000, 3000));
}

btn.addEventListener("click", beginGame);