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
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor()

    draw() {
        c.beginPath();
        c.moveTo(700, 200);
        c.lineTo(720, 210);
        c.lineTo(714, 230);
        c.lineTo(740, 224);
        c.lineTo(740, 218);
        c.lineTo(750, 224);
        c.lineTo(742, 240);
        c.lineTo(714, 250);
        c.lineTo(700, 265);
        c.lineTo(686, 250);
        c.lineTo(658, 240);
        c.lineTo(648, 224);
        c.lineTo(658, 218);
        c.lineTo(658, 224);
        c.lineTo(686, 230);
        c.lineTo(680, 210);
        c.lineTo(700, 200);
        c.strokeStyle = "#fff";
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

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
};

animate();
setInterval()