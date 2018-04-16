let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
c.stroke();