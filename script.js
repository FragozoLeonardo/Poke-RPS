for (count = 0; count <5; count++) {

function getUserOption() {
  let userOption = prompt("Choose ONE between, Rock, Paper, Scissors");
  console.log("Your choose was:" + " " + userOption);
}

getUserOption();

function getPcOption(arr) {

  let randomIndex = Math.floor(Math.random() * arr.length);
  let option = arr[randomIndex];
  return option;
}

let options = ['Paper', 'Rock', 'Scissors'];
let computerOption = getPcOption(options);
console.log("The computer choose was:" + " " + computerOption);

getPcOption(options);

function playGame(userOption, computerOption) {
  let log = '';

  if (userOption === 'Rock') {
    if (computerOption === 'Paper') {
      console.log ("You Lose! Paper beats Rock");
    } else if (computerOption === 'Scissors') {
      console.log ("You Win! Rock beats Scissors");
    } else {
      console.log ("It's a tie");
    }
  } else if (userOption === 'Paper') {
    if (computerOption === 'Scissors') {
      console.log ("You Lose! Scissors beats Paper");
    } else if (computerOption === 'Rock') {
      console.log ("You Win! Paper beats Rock");
    } else {
      console.log ("It's a tie");
    }
  } else if (userOption === 'Scissors') {
    if (computerOption === 'Rock') {
      console.log ("You Lose! Rock beats Scissors");
    } else if (computerOption === 'Paper') {
      console.log ("You Win! Scissors beats Paper");
    } else {
      console.log("It's a tie");
      }
    }
    console.log("The result is ");
  }
  playGame();
}
