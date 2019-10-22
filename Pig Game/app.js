/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying;

init();

gamePlaying = true;

var lastDice;



document.querySelector('.btn-roll').addEventListener('click', function() {
   if (gamePlaying) {
    //1. Add a random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    let secondDice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
    let secondDiceDOM = document.querySelector('.dice2');
        secondDiceDOM.style.display = 'block';
       secondDiceDOM.src = 'dice-' + secondDice + '.png';
    
    
    //3. Upadate teh round score if the rolled number was NOT a 1 
    if (dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
        
    }else if (dice !== 1 && secondDice !== 1) {
        //Add score
        roundScore += dice + secondDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
        
    }
   
   lastDice = dice;
   }
    
    
    
    
    
});

 function getFinalScore() {
        let x = document.getElementById('enter-score').value
    }


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
  
          //Add CURRENT Score to GLOBAL score
    scores[activePlayer] += roundScore;

    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        
    let input = document.querySelector('.final-score').value;
    let winningScore;
    if (input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
        
        
    //Check if the player won the game
        
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    } }
    
  
    
    
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        
        document.querySelector('.dice2').style.display = 'none';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none'
}


document.querySelector('.btn-new').addEventListener('click', init);



function init() {
gamePlaying = true
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    //Removes all the Dice from the initialization
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

    // Changes all of the text content to what they were supposed to be
document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
    // Removes all of the winner and active panels and adds the first active panel to player0
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}










