const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput=='rock'||userInput=='paper'||userInput=='scissors'||userInput=='bomb'){
    return userInput
  }
  else{
    console.log("wrong input ");
  }
}

function getComputerChoice(){
  var randNum = Math.floor(Math.random()*3);
  switch(randNum){
    case 0:
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'wrong choice';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {

  if(userChoice==="bomb"){
    return "User won"
  }

  if (userChoice===computerChoice){
    return "Tie"
  }
  
  if(userChoice==='rock')
  {
    if(computerChoice==='paper'){
      return "Computer won"
    }
    else{
      return "user won"
    }
  }

  if(userChoice==='paper')
  {
    if(computerChoice==='rock'){
      return "user won"
    }
    else{
      return "computer won"
    }
  }

  if(userChoice==='scissors')
  {
    if(computerChoice==='rock'){
      return "Computer won"
    }
    else{
      return "User won"
    }
  }
}


function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log("UserChoice: " + userChoice);
  let computerChoice = getComputerChoice();
  console.log("Computer Choice: " + computerChoice);
  let winner = determineWinner(userChoice, computerChoice);
  console.log(`${winner} !! Congrats`);
}

playGame();


