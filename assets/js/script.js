function rollDice(){
    var die1 = document.querySelector(".dice1 img");
    var die2 = document.querySelector(".dice2 img");
    var result = document.getElementById("result");
    var d1 = Math.floor(Math.random()*6) + 1;
    var d2 = Math.floor(Math.random()*6) + 1;
    die1.src = "./assets/images/dice" + d1 + ".png"
    die2.src = "./assets/images/dice" + d2 + ".png"
    if (d1 == d2){
        result.textContent = "समान अंक।"
    }
    else if(d1 > d2){
        result.textContent = "पहला खिलाडी जीता।"
    }
    else{
        result.textContent = "दूसरा खिलाडी जीता।"
    }
}
