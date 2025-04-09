function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier' ||
      argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ||
      argComputerMove == 'papier' && argPlayerMove == 'nożyce'
    ){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove === argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Tym razem przegrywasz :(');
    }
  }


  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);

}

let rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', function() {
  playGame(1)
});

let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', function() {
  playGame(2)
});

let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', function() {
  playGame(3)
});