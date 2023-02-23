function getRandomOption(arr) {

  const randomIndex = Math.floor(Math.random() * arr.length);

  const option = arr[randomIndex];

  return option;
}

const options = ['paper', 'rock', 'scissors'];

const computer_option = getRandomOption(options);
console.log(computer_option);
