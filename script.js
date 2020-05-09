function computerPlay() {
    let options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('.input-button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        subcommentary.textContent = "";
        playRound(playerSelection,computerPlay);
        endIt();
    });
});

function playRound(playerSelection,computerSelection) {
    
    computerSelection = computerPlay();
     
    while (playerSelection === computerSelection) {
        commentary.textContent = "Tie, try again.";
        return "tie";
    }

    let ans =(
        (playerSelection == "rock" && computerSelection =="scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock"));
    
    playerCap = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
    computerCap = computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1);
    if (ans == true) {
        commentary.textContent =`You win! ${playerCap} beats ${computerCap}.`;
        unum.textContent = parseInt(unum.textContent)+1;
        return "win";
    } else {
        commentary.textContent = `You lose! ${computerCap} beats ${playerCap}.`;
        cnum.textContent = parseInt(cnum.textContent)+ 1;
        return "lose";
    }
}

function endIt() {
    if (cnum.textContent > 4 || unum.textContent >4) {
        subcommentary.textContent = `Final Score: ${unum.textContent} - ${cnum.textContent}`;
        if (cnum.textContent >4) {
            commentary.textContent = `Game Over, You Lose.`;
            ctally.textContent = parseInt(ctally.textContent) + 1;
        } else {
            commentary.textContent = "Game Over, You Win!";
            utally.textContent = parseInt(utally.textContent) + 1;
        }
        cnum.textContent = 0;
        unum.textContent = 0;
    } 
}
