let playerScore = 0;
let computerScore = 0;

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

    if (userOption === 'Rock' && computerOption === 'Paper') {
      console.log ("You Lose! Paper beats Rock");
      computerScore +=1;
    }

    else if (userOption === 'Rock' && computerOption === 'Scissors') {
      console.log ("You Win! Rock beats Scissors");
      playerScore +=1;
    }

     else if (computerOption === 'Rock' && userOption === 'Rock' )  {
      console.log ("It's a tie");
      playerScore +=1;
      computerScore +=1;
    }

    else if (computerOption === 'Scissors' && userOption === 'Paper' ) {
      console.log ("You Lose! Scissors beats Paper");
      computerScore +=1;
      }

    else if (userOption === 'Paper' && computerOption === 'Rock') {
      console.log ("You Win! Paper beats Rock");
      playerScore +=1;
    }

    else if (computerOption === 'Scissors' && userOption === 'Scissors' )  {
      console.log ("It's a tie");
      playerScore +=1;
      computerScore +=1;
    }

   else if (userOption === 'Scissors' && computerOption === 'Rock' ) {
      console.log ("You Lose! Rock beats Scissors");
      computerScore +=1;
    }

    else if (userOption === 'Scissors' && computerOption === 'Paper') {
      console.log ("You Win! Scissors beats Paper");
      playerScore +=1;
    }

    else if (userOption === 'Scissors' && computerOption === 'Paper')  {
      console.log("It's a tie");
      playerScore +=1;
      computerScore +=1;
    }
    console.log("The result is: Player: " +playerScore + " Points, Computer: " +computerScore + " Points");
  }
  playGame();
}