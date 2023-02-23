function getRandomOption(arr) {

  let randomIndex = Math.floor(Math.random() * arr.length);

  let option = arr[randomIndex];

  return option;
}

let options = ['paper', 'rock', 'scissors'];

let computer_option = getRandomOption(options);
console.log(computer_option);
