const ROUND_COUNT = 5;
const WEAPONS = ["rock", "paper", "scissors"];

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
    
    //This turns the array into a circular list with the logic that:
    // If the computer has a weapon one slot lower than the player choice the player wins.
    if((playerChoice == 0 && computerChoice == 2) || computerChoice == playerChoice - 1)
        return `You won! ${WEAPONS[playerChoice]} beats ${WEAPONS[computerChoice]}`.toUpperCase();
    else
        return `You Lose! ${WEAPONS[computerChoice]} beats ${WEAPONS[playerChoice]}`.toUpperCase();

}

const playerSelection = computerPlay();
const computerSelection = computerPlay();
console.log("P:",playerSelection)
console.log("C:",computerSelection)
console.log(playRound(playerSelection, computerSelection));
