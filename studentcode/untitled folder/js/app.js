let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

let colorArray = [
    "#ff0099",
    "#ff6600",
    "#fe00f6",
    "#83f52c",
    "#f3f315",
    "#fff"
];

let keys = {
    left: false,
    rigth: false,
    up: false,
    down: false
};

let speed = 20;

let LEFT_ARROW_CODE = 37;
let RIGHT_ARROW_CODE = 39;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor() {
        this.px = 0;
        this.py = 0;
    }
    moveLeft() {
        this.px = this.px + speed;
    }
    draw() {
        
         c.strokeStyle = "#FF0000";
        c.beginPath();
        c.moveTo(700 + this.px, 200 + this.py);
        c.lineTo(720 + this.px, 210 + this.py);
        c.lineTo(714 + this.px, 230 + this.py);
        c.lineTo(740 + this.px, 224 + this.py);
        c.lineTo(740 + this.px, 218 + this.py);
        c.lineTo(750 + this.px, 224 + this.py);
        c.lineTo(742 + this.px, 240 + this.py);
        c.lineTo(714 + this.px, 250 + this.py);
        c.lineTo(700 + this.px, 265 + this.py);
        c.lineTo(686 + this.px, 250 + this.py);
        c.lineTo(658 + this.px, 240 + this.py);
        c.lineTo(648 + this.px, 224 + this.py);
        c.lineTo(658 + this.px, 218 + this.py);
        c.lineTo(658 + this.px, 224 + this.py);
        c.lineTo(686 + this.px, 230 + this.py);
        c.lineTo(680 + this.px, 210 + this.py);
        c.lineTo(700 + this.px, 200 + this.py);
        c.stroke();
    }
    
}

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length) + 1];
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
    }
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}
function createCircle() {
    let radius = Math.random() * 50 + 10;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

setInterval(createCircle, 500);

let circleArray = [];
for (let i = 0; i < 3; i++) {
    createCircle();

};
let player = new Player();
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    player.draw();
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
};
document.addEventListener('keydown', e => {
    if (e.keyCode === LEFT_ARROW_CODE) {
        // this.player.move(MOVE_LEFT);
       player.moveLeft()

    }
    else if (e.keyCode === RIGHT_ARROW_CODE) {
        // this.player.move(MOVE_RIGHT);
        KEYS.right = true;
    }
});
document.addEventListener('keyup', e => {
    if (e.keyCode === LEFT_ARROW_CODE) {
        KEYS.left = false;
    }
    else if (e.keyCode === RIGHT_ARROW_CODE) {
        KEYS.right = false;
    }
});
animate();
setInterval()
