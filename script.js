const ROUND_COUNT = 5;
const WEAPONS = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

//Returns Rock,paper or scissors string randomly 
function computerPlay() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) return "rock";
  if (choice == 2) return "paper";

  return "scissors";
}

//Returns the winner of a round. 
//Input the 2 players weapon choice as a string.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection)
        return `Its a tie. Both players chose ${playerSelection} `.toUpperCase();
        
    let playerChoice = WEAPONS.indexOf(playerSelection);
    let computerChoice = WEAPONS.indexOf(computerSelection);

    //Ensures correct input from user
    let newAnswer;
    while(playerChoice == -1){
        newAnswer = prompt("Please enter either 'Rock', 'Paper' or 'Scissors':").toLowerCase();
        playerChoice = WEAPONS.indexOf(newAnswer);
    }

    return decideWinner(playerChoice,computerChoice);

}


//Returns congratualation text if player wins
//Input must one of the numbers 0-2
//This turns the array into a circular list with the logic that:
// If the computer has a weapon one slot lower than the player choice the player wins.
function decideWinner(playerChoice,computerChoice){
    console.log("Computer Chose:", WEAPONS[computerChoice]);

     if((playerChoice == 0 && computerChoice == 2) || computerChoice == playerChoice - 1){
         playerScore++;
        return `You won! ${WEAPONS[playerChoice]} beats ${WEAPONS[computerChoice]}`.toUpperCase();
     }
    else{
        computerScore++;
        return `You Lose! ${WEAPONS[computerChoice]} beats ${WEAPONS[playerChoice]}`.toUpperCase();
    }
}


function game(){

    let playerSelection;
    let computerSelection;

    for(let currRound = 0; currRound < ROUND_COUNT; currRound++){
        playerSelection = prompt(`ROUND ${currRound+1}/${ROUND_COUNT} - Rock, Paper or Scissors:`);
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
        if(playerScore == 3 || computerScore == 3){
            console.log(displayWinner());
            return;
        }
    }

     console.log(displayWinner());
}

function displayWinner(){
    if (playerScore == computerScore) return "You tied with the computer...congrats?"
    return playerScore > computerScore ? "Congrats You Won The Gane!": "You lost the game. Maybe next Time"
}

game();

