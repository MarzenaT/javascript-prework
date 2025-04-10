{
  const playGame = function(playerInput){
    clearMessages();
    const  getMoveName = function(argMoveId){
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
  
    const displayResult = function (argComputerMove, argPlayerMove){
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
  
    const randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);
  
    console.log('Wylosowana liczba to: ' + randomNumber);
  
    printMessage('Mój ruch to: ' + computerMove);
  
    console.log('Gracz wpisał: ' + playerInput);
  
    printMessage('Twój ruch to: ' + playerMove);
  
    displayResult(computerMove, playerMove);
  
  }
  
  const rockButton = document.getElementById('play-rock'),
    paperButton = document.getElementById('play-paper'),
    scissorsButton = document.getElementById('play-scissors');
  rockButton.addEventListener('click', function() {
    playGame(1)
  });
  
  paperButton.addEventListener('click', function() {
    playGame(2)
  });
  
  scissorsButton.addEventListener('click', function() {
    playGame(3)
  });
}
