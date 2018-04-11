var btn = document.getElementById("btn");
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
};
function eventKey(){
    if(!ret){
        alert("You won"); 
        ret = true; 
        document.body.onkeyup = null
    }
};


setTimeout(function(){
    var button = document.createElement("button");
    button.innerHTML = "Click Here!";
    btn.classList.add("flex");
    btn.appendChild(button);
    btn.style.top = Math.floor((Math.random() * 300) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * (document.documentElement.clientWidth)- 50)  + 1) + "px";
    btn.addEventListener("click", eventClick);
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