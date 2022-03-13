const ROUND_COUNT = 5;
const WEAPONS = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector('.player-choice');
const computerDisplay = document.querySelector('.computer-choice');
let computerScore = 0;
let playerScore = 0;
let round = 0;

// Edits the html elements text content.
// The first parameter is the elements class name.
//The second is the string you want the text content to become 

function editTxtCont(clasStr, toStr){
    let elem = document.querySelector(clasStr);
    elem.textContent = toStr;
}

/**
 Starts round based on the text content of the html element
 that calls it. Displays results of the match and updates game 
 screen for the next round */
function roundStart(){
    let playerChoice = this.textContent;
    let computerChoice = computerPlay();
    let result = playRound(playerChoice, computerChoice);

    editTxtCont(".player-choice", "You chose " + playerChoice)
    editTxtCont(".computer-choice", "The computer chose " + computerChoice)
    editTxtCont(".results", result)
    updateGame();
}


let addListener = button => {
    button.addEventListener('click', roundStart);
}

const playerBtns = document.querySelectorAll(`button`);
playerBtns.forEach(addListener);



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

    return decideWinner(playerChoice,computerChoice);

}


//Returns congratualation text if player wins
//Input must one of the numbers 0-2
//This turns the array into a circular list with the logic that:
// If the computer has a weapon one slot lower than the player choice the player wins.
function decideWinner(playerChoice,computerChoice){
    console.log("You chose:", WEAPONS[playerChoice]);
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

/**
 * Updates game screen. Displays the current score for players.
 * Increase round and checks if the game is finished
 */

function updateGame(){

    round++;
    editTxtCont(".p-score", playerScore)
    editTxtCont(".c-score", computerScore)
   
    if(round > 5 || playerScore == 3 || computerScore == 3){
      endGame();
      return;
    }
    
  
    editTxtCont(".round", `Round ${round}/5`);
}


/**
 * Puts game at end scene. Removes buttons, changes text content and displays
 * the winner.
 */
function endGame(){
    editTxtCont(".round","Game Over");
    editTxtCont(".player-choice","");
    editTxtCont(".computer-choice","");
    editTxtCont(".results", displayWinner());

    playerBtns.forEach((button) =>{
        button.style.display ="none";
    });
}

/**
 * Returns the winner of the match which is the player with the most points
 */

function displayWinner(){
    if (playerScore == computerScore) return "You tied with the computer...congrats?"
    return playerScore > computerScore ? "Congrats You Won The Gane!": "You lost the game. Maybe next Time"
}



