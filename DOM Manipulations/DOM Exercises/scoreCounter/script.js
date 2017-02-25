var playerOneButton = document.querySelector('#playerOne');
var playerTwoButton = document.querySelector('#playerTwo');
var playerOneDisplay = document.querySelector('#playerOneDisplay');
var playerTwoDisplay = document.querySelector('#playerTwoDisplay');
var reset = document.querySelector('#reset')
var selector = document.querySelector('input');
var selectorNumber = document.querySelector('p span')

var playerOneScore = 0;
var playerTwoScore = 0;

var gameOver = false;
var win = 5;

playerOneButton.addEventListener("click", function() {
  if (!gameOver) {
    playerOneScore++;
    if (playerOneScore === win) {
      playerOneDisplay.classList.add("winner");
      gameOver = true;
    }
    playerOneDisplay.textContent = playerOneScore;
  }
});

playerTwoButton.addEventListener("click", function() {
  if (!gameOver) {
    playerTwoScore++;
    if (playerTwoScore === win) {
      playerTwoDisplay.classList.add("winner");
      gameOver = true;
    }
    playerTwoDisplay.textContent = playerTwoScore;
  }
});

reset.addEventListener("click", function() {
  resetGame();
});

selector.addEventListener("change", function() {
  selectorNumber.textContent = this.value;
  win = Number(this.value);
  resetGame();
});

function resetGame() {
  playerOneScore = 0;
  playerOneDisplay.textContent = playerOneScore;
  playerOneDisplay.classList.remove("winner");
  playerTwoScore = 0;
  playerTwoDisplay.textContent = playerTwoScore;
  playerTwoDisplay.classList.remove("winner");
  gameOver = false;
}
