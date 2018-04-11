var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];
var start = document.getElementById("message");
var reset = document.getElementById("reset");
var fiveButtons = document.getElementById("game");
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function resetFunction() {
    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset Game";
    reset.appendChild(resetButton);
    resetButton.addEventListener("click", (e) => { e.stopPropagation(); window.location.reload() });
}
var ret = false;
function eventClick() {
    if (!ret) {
        alert("You won");
        ret = true;
        body.removeEventListener("click", eventClick);
        resetFunction();
    }
}
function eventKey() {
    if (!ret) {
        alert("You won");
        ret = true;
        document.body.onkeyup = null;
        resetFunction();
    }
}
function beginGame(e) {
    e.stopPropagation();
    btn.style.display = "none";

    setTimeout(function () {
        let buttonArr = [];
        for (i = 0; i < 5; i++) {
            let buttons = document.createElement("button");
            buttons.innerHTML = "Click!"
            fiveButtons.appendChild(buttons);
            buttons.onclick = function (e) {
                e.stopPropagation();
                buttons.style.display = 'none';
            }
            buttonArr.push(buttons);
        }
        function checkDone() {
            return buttonArr.every(function (x) {
                return x.style.display === 'none'
            })
        }

        body.addEventListener("click", function bodyClick() {
            alert("Game Over");
            ret = true;
            body.removeEventListener("click", bodyClick);
        });
        setTimeout(() => {
            if (!ret) {
                alert("You lost");
                ret = true;
                resetFunction();
            }
        }, 3000);
    }, random(1000, 3000));
}

btn.addEventListener("click", beginGame);