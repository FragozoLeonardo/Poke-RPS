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
let computer_option = getPcOption(options);
console.log("The computer choose was:" + " " + computer_option);

}