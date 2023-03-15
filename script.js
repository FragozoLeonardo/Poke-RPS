let playerScore = 0;
let computerScore = 0;

for (count = 0; count <5; count++) {

  function getUserOption() {
    let userOption = prompt("Choose ONE between, Grass, Fire, Water");
    console.log("Your choose was:" + " " + userOption);
    return userOption;
  }

  let userOption = getUserOption();

  function getPcOption(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let option = arr[randomIndex];
    return option;
  }

let options = ['Grass', 'Fire', 'Water'];
let computerOption = getPcOption(options);
console.log("The computer choose was:" + " " + computerOption);

function playGame(userOption, computerOption) {

    if (userOption === 'Grass' && computerOption === 'Water') {
      console.log ("You Win! Grass beats Water");
      computerScore +=1;
    }

    else if (userOption === 'Grass' && computerOption === 'Fire') {
      console.log ("You Lose! Fire beats Grass");
      playerScore +=1;
    }

    else if (computerOption === 'Grass' && userOption === 'Grass' )  {
      console.log ("It's a tie");
      playerScore +=1;
      computerScore +=1;
    }

    else if (computerOption === 'Fire' && userOption === 'Grass' ) {
      console.log ("You Win! Fire beats Grass");
      computerScore +=1;
      }

    else if (userOption === 'Fire' && computerOption === 'Water') {
      console.log ("You Lose! Water beats Fire");
      playerScore +=1;
    }

    else if (computerOption === 'Fire' && userOption === 'Fire' )  {
      console.log ("It's a tie");
      playerScore +=1;
      computerScore +=1;
    }

    else if (userOption === 'Water' && computerOption === 'Grass' ) {
      console.log ("You Lose! Grass beats Water");
      computerScore +=1;
    }

    else if (userOption === 'Water' && computerOption === 'Fire') {
      console.log ("You Win! Water beats Fire");
      playerScore +=1;
    }

    else if (userOption === 'Water' && computerOption === 'Water')  {
      console.log("It's a tie");
      playerScore +=1;
      computerScore +=1;
    }

    console.log("The result is: Player: " +playerScore + " Points, Computer: " +computerScore + " Points");
  }

  playGame(userOption, computerOption);
}