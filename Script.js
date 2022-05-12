// var roll = document.getElementById("roll");

function Diceplay(){

    //for first dice
    let Dice1 = Math.floor(Math.random() * 6 + 1);
    let diceplay1 = "images/dice" + Dice1 + ".png";
    document.querySelectorAll(".img1")[0].setAttribute('src',diceplay1);
    //for second dice
    let Dice2 = Math.floor(Math.random() * 6 + 1);
    let diceplay2 = "images/dice" + Dice2 + ".png";
    document.querySelectorAll(".img2")[0].setAttribute('src',diceplay2);

//using if statement    
  if(Dice1 > Dice2){
       document.querySelector('h1').innerHTML = "player1  Wins!"
    }
    else if (Dice1 < Dice2){
        document.querySelector('h1').innerHTML = "player2  Wins!"
    }
    else{
        document.querySelector('h1').innerHTML = "It's draw draw!"
    
    }
}
// this is for rollagain button and rest button
document.querySelector("button").addEventListener("click", Diceplay);

