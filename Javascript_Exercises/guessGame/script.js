var secretNumber = 5;

var strAnswer = prompt("Select a number from 1 up to 10");
var answer = Number(strAnswer);

if(secretNumber === answer){
  alert("You WON!");
} else if (answer > secretNumber) {
  alert("Too high!");
} else {
  alert("Too Low!");
};
