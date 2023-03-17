const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const btngrass = document.querySelectorAll("#btn-grass");
const btnfire = document.querySelectorAll("#btn-fire");
const btnwater = document.querySelectorAll("#btn-water");
let player;
let computer;
let result;

btngrass.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

btnfire.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));


btnwater.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));


function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "Grass";
        break;
      case 2:
        computer = "Fire";
        break;
      case 3:
        computer = "Water";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "Grass"){
      return (player == "Fire") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Fire"){
      return (player == "Water") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Water"){
      return (player == "Grass") ? "You Win!" : "You Lose!"
    }
}