const player_1 = document.querySelector('#player_1');
const player_2 = document.querySelector('#player_2');
const btn = document.querySelector('.container__button');

//Alert informing that there are no names typed into the form
const alertMessage = document.querySelector('.container__alert-message');

btn.addEventListener('click', () => {
  //Following condition is fulfilled only if both names are typed in
  if (player_1.value && player_2.value) {
    //Adding a class which hides the alert message if it is displayed
    alertMessage.classList.add('container__alert-message--hidden');

    //Adding player's names to session storage to use them in the game
    sessionStorage.setItem('player_1_name', player_1.value);
    sessionStorage.setItem('player_2_name', player_2.value);

    //Redirecting to the game webpage
    window.location.href = 'game_page.html';
  }
  //Displaying the alert message if the condition is not fulfilled
  else {
    alertMessage.classList.remove('container__alert-message--hidden');
  }
});
