const getUserChoice = input => {
  const userInput = input === 'rock'? 1 : 
  input ==='scissors' ? 2 : 
  input ==='paper' ? 3 : 0;
  if (userInput === 0) return "ERROR Invalid Input";
  robotInput = Math.ceil(Math.random() * 3);
  console.log(`You're ${input}`);
  console.log(`Robot is ${robotInput === 1? 'rock': robotInput === 2? 'scissors': 'paper'}`)
  if (userInput === robotInput) return 'Draw';
  else if (userInput === 1) {
    return robotInput === 2 ? 'Winner' : 'Loser';
  }
  else if (userInput === 2) {
    return robotInput === 1 ? 'Loser': 'Winner';
  }
  else if (userInput === 3) {
    return robotInput === 1 ? 'Winner': 'Loser';
  }
}
console.log(getUserChoice('rock'));
