
var randomVariable1 = Math.floor(Math.random() * 6 ) + 1;

var result = randomVariable1 + ".png";

var image1 = document.querySelector(".img1");

image1.setAttribute("src", result);