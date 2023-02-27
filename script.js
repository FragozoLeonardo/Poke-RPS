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

getPcOption(op);

function playGame(userOption, computerOption) {
  let log = '';

  if (userOption === 'Rock') {
    if (computerOption === 'Paper') {
      log = 'You Lose! Paper beats Rock';
    } else if (computerOption === 'Scissors') {
      log = 'You Win! Rock beats Scissors';
    } else {
      log = "It's a tie";
    }
  } else if (userOption === 'Paper') {
    if (computerOption === 'Scissors') {
      log = 'You Lose! Scissors beats Paper';
    } else if (computerOption === 'Rock') {
      log = 'You Win! Paper beats Rock';
    } else {
      log = "It's a tie";
    }
  } else if (userOption === 'Scissors') {
    if (computerOption === 'Rock') {
      log = 'You Lose! Rock beats Scissors';
    } else if (computerOption === 'Paper') {
      log = 'You Win! Scissors beats Paper';
    } else {
      log = "It's a tie";
      }
    }
  }
}
