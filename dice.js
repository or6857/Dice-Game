
var randomVariable1 = Math.floor(Math.random() * 6 ) + 1;

var result = `${randomVariable1}.png`;


document.getElementById("img1").setAttribute("src","result");

console.log(result);