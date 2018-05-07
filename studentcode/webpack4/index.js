var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
var t = document.createTextNode(getRandomJoke.body);
var a = document.getElementById("tra");
a.appendChild(t);
