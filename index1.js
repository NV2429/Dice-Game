var randomNumberOne = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumberOne + ".png"; //randomimages 1 - 6

var randomImageSourceOne = "images/" + randomDiceImage;

var imageone = document.querySelectorAll("img")[0];

imageone.setAttribute("src", randomImageSourceOne);

//for second dice
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

var randomImageSourceTwo = "images/dice" + randomNumberTwo + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSourceTwo);

//if player one Wins

if(randomNumberOne > randomNumberTwo){
  document.querySelector("h1").innerHTML = "🎀 PLAYER ONE WINS..!";
}
else if(randomNumberTwo > randomNumberOne){
  document.querySelector("h1").innerHTML = "🎀 PLAYER TWO WINS..!";
}
else{
  document.querySelector("h1").innerHTML = "🎌 DRAW..!";
}
