
function myFunction(){

    var randomVariable1 = Math.floor(Math.random() * 6 ) + 1;

    var result1 = randomVariable1 + ".png";

    var image1 = document.querySelector(".img1");

    image1.setAttribute("src", result1);



    var randomVariable2 = Math.floor(Math.random() * 6 ) + 1;

    var result2 = randomVariable2 + ".png";

    var image2 = document.querySelector(".img2");

    image2.setAttribute("src", result2);



    if(randomVariable1>randomVariable2){
        document.querySelectorAll("h2")[0].innerHTML = "PLAYER 1 WINS !!!"
    }
    else if(randomVariable2>randomVariable1)
    {
        document.querySelectorAll("h2")[0].innerHTML = "PLAYER 2 WINS !!!"
    }
    else{
        document.querySelectorAll("h2")[0].innerHTML = "ITS A DRAW !!!"
    }
}


document.getElementById("play").onclick = function() {myFunction()};