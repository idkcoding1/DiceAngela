var randomnumber1 = Math.floor((Math.random()) * 6) + 1;

let diceimage = "images/dice" + randomnumber1 + ".png";

let img1 = document.querySelectorAll("img")[0];

//to change inner html to our new value 
img1.setAttribute("src", diceimage);


var randomnumber2 = Math.floor((Math.random() * 6)) + 1;

let img2source = "images/dice" + randomnumber2 + ".png";

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", img2source);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🎲🎲🎲PLAYER ONE WON";
} else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "PLAYER TWO WON🎲🎲🎲";
} else {
    document.querySelector("h1").innerHTML = "EGO WON";

}