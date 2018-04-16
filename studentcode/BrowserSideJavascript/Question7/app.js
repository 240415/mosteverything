let body = document.getElementsByTagName("body")[0];
let reset = document.getElementById("reset");
let divButton = document.getElementById("gameStart");
let beginGame = document.createElement("button");
let gameButtons = document.getElementById("gameButtons");
beginGame.innerHTML = "Begin Game!";
divButton.appendChild(beginGame);

let ret = false;

function resetFunction(){
    let resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset Game";
    reset.appendChild(resetButton);
    resetButton.addEventListener("click", (e) => { e.stopPropagation(); window.location.reload() })
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function eventClick() {
    if (!ret) {
        alert("You won");
        ret = true;
        body.removeEventListener("click", eventClick);
        resetFunction();
    }
}

function start(){
    beginGame.addEventListener("click", function(){
        divButton.removeChild(beginGame);
        setTimeout(function (){
            let counter = randomNumber(1, 10);
            let numClicked = 0
            for(let i = 0; i < counter; i++){
                let buttons = document.createElement("button");
                buttons.innerHTML = "Click Here"
                buttons.style.top = Math.floor((Math.random() * 300) + 1) + "px";
                buttons.style.left = Math.floor((Math.random() * (document.documentElement.clientWidth) - 300)  + 1) + "px";
                buttons.style.position = "absolute"
                gameButtons.appendChild(buttons);
                buttons.addEventListener("click", function(e){ 
                    e.stopPropagation();
                    gameButtons.removeChild(buttons);
                    numClicked++
                    if(numClicked === counter){
                        eventClick();
                    }
                })
            }
            body.addEventListener("click", function(){
                if (!ret) {
                    alert("Game Over");
                    ret = true;
                    gameButtons.innerHTML = '';
                    body.removeEventListener("click", eventClick);
                    resetFunction();
                }
            })
            setTimeout(() => {
                if (!ret) {
                    alert("You lost");
                    ret = true;
                    gameButtons.innerHTML = '';
                    resetFunction();
                }
            }, 4000*counter);   
        }, randomNumber(1000, 3000))
    });
};


start();
