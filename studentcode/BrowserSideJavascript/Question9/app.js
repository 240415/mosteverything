let reset = document.getElementById("reset");
let played = false;
let startButton = document.querySelector(".backStart");
let fighters = document.querySelector("#fighters");
let mario = document.querySelector("#mario");
let luigi = document.querySelector("#luigi");
let winMessage = document.querySelector("#winMessage");
let readySetFight = document.querySelector("#readySetFight");
let audio = new Audio('Mario.mp3');
let introMusic = new Audio("Ground Theme.mp3");
let battleMusic = new Audio("New Super Mario Bros. Wii Music Extended.mp3");
let gameOverMusic = new Audio("Game Over.mp3");
let winMusic = new Audio("Level Complete.mp3");
let scoreLuigi = document.querySelector("#scoreLuigi");
let scoreMario = document.querySelector("#scoreMario");
let randomNumber = function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
introMusic.play();

let counter = 1;
let luigiPoints = 0;
let marioPoints = 0;
startButton.addEventListener("click", function () {
    stopMusic(introMusic);
    battleMusic.play();
    scoreLuigi.innerHTML = luigiPoints;
    scoreMario.innerHTML = marioPoints;
    startButton.style.display = "none";
    winMessage.innerHTML = "Round " + counter;
    readySetFight.innerHTML = "Ready";
    setTimeout(function () {
        readySetFight.innerHTML = "Set";
    }, 1000);
    setTimeout(function () {
        readySetFight.innerHTML = "Fight!";
    }, 2000);
    setTimeout(function () {
        winMessage.innerHTML = ""
        start();
    }, 3000);

})

function resetFunction() {
    document.onkeypress = null;
    let resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset Game";
    reset.appendChild(resetButton);
    resetButton.addEventListener("click", (e) => { e.stopPropagation(); window.location.reload() });
}

function nextRound() {
    document.onkeypress = null;
    let resetButton = document.createElement("button");
    resetButton.innerHTML = "Next Round >>>";
    reset.appendChild(resetButton);
    resetButton.addEventListener("click", function (e) {
        luigi.src = "luigi-gif-2.gif";
        luigi.className = "";
        mario.src = "mario-gif-2.gif";
        mario.className = "";
        stopMusic(gameOverMusic);
        stopMusic(winMusic);
        battleMusic.play();
        reset.removeChild(resetButton);
        e.stopPropagation();
        counter++
        winMessage.innerHTML = "Round " + counter;
        readySetFight.innerHTML = "Ready";
        setTimeout(function () {
            readySetFight.innerHTML = "Set";
        }, 1000);
        setTimeout(function () {
            readySetFight.innerHTML = "Fight!";
        }, 2000);
        setTimeout(function () {
            winMessage.innerHTML = ""
            start();
        }, 3000);

    });
}
function stopMusic(x){
    x.pause();
    x.currentTime = 0;
}

function start() {
    let played = false;
    readySetFight.innerHTML = "";
    fighters.style.display = "block";
    document.onkeypress = ((e) => {
        if (!played && e.keyCode === 113) {
            stopMusic(battleMusic);
            gameOverMusic.play();
            winMessage.innerHTML = "Luigi Lost!";
            marioPoints++
            scoreMario.innerHTML = marioPoints;
            played = true;
            if(luigiPoints || marioPoints >= 3){
                resetFunction();
                fighters.style.display = "none";
            } else {
                nextRound();
            }
        } else if (!played && e.keyCode === 112) {
            stopMusic(battleMusic)
            gameOverMusic.play();
            winMessage.innerHTML = "Mario Lost!";
            luigiPoints++
            scoreLuigi.innerHTML = luigiPoints;
            played = true;
            if(marioPoints || luigiPoints >= 3){
                resetFunction();
                fighters.style.display = "none";
            } else {
                nextRound();
            }
        }
    });

    
    setTimeout(function () {
        if (!played) {
            document.onkeypress = null;
            audio.play();
            document.onkeypress = ((e) => {
                if (e.keyCode === 113) {
                    stopMusic(battleMusic);
                    winMusic.play();
                    winMessage.innerHTML = "Luigi Wins!";
                    played = true;
                    luigiPoints++
                    scoreLuigi.innerHTML = luigiPoints;
                    luigi.src = "luigi-gif.gif";
                    luigi.className = "jumpLuigi";
                    if(luigiPoints >= 3){
                        resetFunction();
                        fighters.style.display = "none";
                    } else {
                        nextRound();
                    }
                } else if (e.keyCode === 112) {
                    stopMusic(battleMusic);
                    winMusic.play();
                    winMessage.innerHTML = "Mario Wins!";
                    played = true;
                    marioPoints++
                    scoreMario.innerHTML = marioPoints;
                    mario.src = "mario-gif.gif";
                    mario.className = "jumpMario";
                    if(marioPoints >= 3){
                        resetFunction();
                        fighters.style.display = "none";
                    } else {
                        nextRound();
                    }
                }
            });
        }
    }, randomNumber(2000, 8000))
}





