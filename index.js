var randomVar1 = Math.floor(Math.random() * 6) + 1;
var randomVar2 = Math.floor(Math.random() * 6) + 1;

var images1 = "./images/dice" + randomVar1 + ".png";
var images2 = "./images/dice" + randomVar2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if(randomVar1 > randomVar2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} 
else if (randomVar1 < randomVar2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}