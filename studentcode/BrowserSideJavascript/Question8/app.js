let reset = document.getElementById("reset");
let played = false;
let audio = new Audio('Explosion.mp3');
let randomNumber = function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function resetFunction(){
    let resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset Game";
    reset.appendChild(resetButton);
    resetButton.addEventListener("click", (e) => { e.stopPropagation(); window.location.reload() })
}
function endOfGame(){
    if (!played) {
        played = true;
        resetFunction();
    }
}
document.onkeypress = ( (e) => {
    if (!played && e.keyCode === 113) {
        alert("Player 1 loses");
        endOfGame();

    } else if(!played && e.keyCode === 112) {
        alert("Player 2 loses");
        endOfGame();

    }
});
setTimeout(function (){
    if(!played){
        document.onkeypress = null
        audio.play();
        document.onkeypress = ((e) => {
        if (e.keyCode === 113) {
            alert("Player 1 Wins!");
            played = true;
            resetFunction();
        }else if(e.keyCode === 112) {
            alert("Player 2 Wins");
            played = true;
            resetFunction();
        }
    });
    }
}, randomNumber(2000, 8000))