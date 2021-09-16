const box = document.querySelectorAll('.game-container__box');
const turn = document.querySelectorAll('.player-container__player-turn');
const names = document.querySelectorAll('.player-container__player-name');
const new_game = document.querySelector('.new-game-button');
const score = document.querySelectorAll('.player-container__score');

//Getting players' names from session storage
let player_2_name = sessionStorage.getItem('player_2_name');
let player_1_name = sessionStorage.getItem('player_1_name');

//Variables which holds IDs of all the boxes clicked by a specific player
let player_1_boxes = [];
let player_2_boxes = [];

//Number of rounds won by a specific player
let player_1_wins = 0;
let player_2_wins = 0;

//Auxiliary variable which indicates which player has a move
let player = 1;

//Auxiliary variable which indicates how many moves has been already made by players
let i = 0;

//Load player's names to .player-container__player-name div
window.onload = () => {
  names[0].innerHTML = player_1_name;
  names[1].innerHTML = player_2_name;
};

box.forEach((box) =>
  box.addEventListener('click', (e) => {
    e.preventDefault;

    if (player === 1 && !e.target.innerHTML) {
      e.target.innerHTML = 'X';
      turn[0].style.opacity = 0;
      turn[1].style.opacity = 1;
      player_1_boxes.push(e.target.id);
      i++;
      end_game(player_1_boxes);
      player = 2;
    }
    if (player === 2 && !e.target.innerHTML) {
      e.target.innerHTML = 'O';
      turn[0].style.opacity = 1;
      turn[1].style.opacity = 0;
      player_2_boxes.push(e.target.id);
      i++;
      end_game(player_2_boxes);
      player = 1;
    }
  })
);

new_game.addEventListener('click', () => {
  i = 0;
  player = 1;
  turn[0].style.opacity = 1;
  turn[1].style.opacity = 0;
  player_1_boxes = [];
  player_2_boxes = [];
  turn[0].innerHTML = 'Your turn! You play X';
  turn[1].innerHTML = 'Your turn! You play O';
  box.forEach((box) => {
    box.innerHTML = '';
    box.style = '';
  });
});

//p_score is a parameter which can be represented by player_1_boxes or player_2_boxes
//It holds IDs of all the boxes clicked by a specific player
function end_game(p_score) {
  if (
    //Checking if any of 'winning combination' has been clicked by a player
    (p_score.includes('0') && p_score.includes('1') && p_score.includes('2')) ||
    (p_score.includes('3') && p_score.includes('4') && p_score.includes('5')) ||
    (p_score.includes('6') && p_score.includes('7') && p_score.includes('8')) ||
    (p_score.includes('0') && p_score.includes('3') && p_score.includes('6')) ||
    (p_score.includes('1') && p_score.includes('4') && p_score.includes('7')) ||
    (p_score.includes('2') && p_score.includes('5') && p_score.includes('8')) ||
    (p_score.includes('0') && p_score.includes('4') && p_score.includes('8')) ||
    (p_score.includes('2') && p_score.includes('4') && p_score.includes('6'))
  ) {
    //Coloring the 'winning combination'
    if (
      p_score.includes('0') &&
      p_score.includes('1') &&
      p_score.includes('2')
    ) {
      box[0].style.background = '#2c68b5';
      box[0].style.color = '#f0eeee';

      box[1].style.background = '#2c68b5';
      box[1].style.color = '#f0eeee';

      box[2].style.background = '#2c68b5';
      box[2].style.color = '#f0eeee';
    }

    if (
      p_score.includes('3') &&
      p_score.includes('4') &&
      p_score.includes('5')
    ) {
      box[3].style.background = '#2c68b5';
      box[3].style.color = '#f0eeee';

      box[4].style.background = '#2c68b5';
      box[4].style.color = '#f0eeee';

      box[5].style.background = '#2c68b5';
      box[5].style.color = '#f0eeee';
    }

    if (
      p_score.includes('6') &&
      p_score.includes('7') &&
      p_score.includes('8')
    ) {
      box[6].style.background = '#2c68b5';
      box[6].style.color = '#f0eeee';

      box[7].style.background = '#2c68b5';
      box[7].style.color = '#f0eeee';

      box[8].style.background = '#2c68b5';
      box[8].style.color = '#f0eeee';
    }

    if (
      p_score.includes('0') &&
      p_score.includes('3') &&
      p_score.includes('6')
    ) {
      box[0].style.background = '#2c68b5';
      box[0].style.color = '#f0eeee';

      box[3].style.background = '#2c68b5';
      box[3].style.color = '#f0eeee';

      box[6].style.background = '#2c68b5';
      box[6].style.color = '#f0eeee';
    }

    if (
      p_score.includes('1') &&
      p_score.includes('4') &&
      p_score.includes('7')
    ) {
      box[1].style.background = '#2c68b5';
      box[1].style.color = '#f0eeee';

      box[4].style.background = '#2c68b5';
      box[4].style.color = '#f0eeee';

      box[7].style.background = '#2c68b5';
      box[7].style.color = '#f0eeee';
    }

    if (
      p_score.includes('2') &&
      p_score.includes('5') &&
      p_score.includes('8')
    ) {
      box[2].style.background = '#2c68b5';
      box[2].style.color = '#f0eeee';

      box[5].style.background = '#2c68b5';
      box[5].style.color = '#f0eeee';

      box[8].style.background = '#2c68b5';
      box[8].style.color = '#f0eeee';
    }

    if (
      p_score.includes('0') &&
      p_score.includes('4') &&
      p_score.includes('8')
    ) {
      box[0].style.background = '#2c68b5';
      box[0].style.color = '#f0eeee';

      box[4].style.background = '#2c68b5';
      box[4].style.color = '#f0eeee';

      box[8].style.background = '#2c68b5';
      box[8].style.color = '#f0eeee';
    }

    if (
      p_score.includes('2') &&
      p_score.includes('4') &&
      p_score.includes('6')
    ) {
      box[2].style.background = '#2c68b5';
      box[2].style.color = '#f0eeee';

      box[4].style.background = '#2c68b5';
      box[4].style.color = '#f0eeee';

      box[6].style.background = '#2c68b5';
      box[6].style.color = '#f0eeee';
    }

    //Blocking all the boxes which hasn't been clicked during the round by using space character
    box.forEach((box) => {
      if (!box.innerHTML) {
        box.innerHTML = ' ';
      }
    });

    //The last move leads to winning in tic tac toe so the player who made it is the one who won
    //Number of player's moves is represented by player_1_boxes.length and player_1_boxes.length
    if (player_1_boxes.length > player_2_boxes.length) {
      player_1_wins++;

      //Updating number of wins of player 1
      score[0].innerHTML = player_1_wins;
    } else {
      player_2_wins++;

      //Updating number of wins of player 2
      score[1].innerHTML = player_2_wins;
    }

    //Announcing the end of the round
    turn[0].style.opacity = 1;
    turn[0].innerHTML = 'End of the game';
    turn[1].style.opacity = 1;
    turn[1].innerHTML = 'End of the game';
  }
  //If there is no 'winning combination' and the 9th move has been made annouce a draw
  else if (i === 9) {
    turn[0].style.opacity = 1;
    turn[0].innerHTML = 'Draw';
    turn[1].style.opacity = 1;
    turn[1].innerHTML = 'Draw';
  }
}
