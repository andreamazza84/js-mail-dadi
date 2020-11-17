//Gioco dei dadi
//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//REGOLE DEL GIOCO (utente vs computer)
//Al click del bottone il giocatore lancia il dado una volta.
//La partita si aggiudica a chi fa il maggior punteggio alla fine di 6 lanci.

var toss = document.getElementById('toss');
var playerToss = [];
var computerToss = [];
var playerResult = 0;
var computerResult = 0;
var j = 0;
var result = 0;

toss.addEventListener("click", function(){

  playerToss[j] = parseInt((Math.floor(Math.random() * 10) / 10 * 6));
  computerToss[j] = parseInt((Math.floor(Math.random() * 10) / 10 * 6));

  var playerTable = [
    document.getElementById("player-result-1"),
    document.getElementById("player-result-2"),
    document.getElementById("player-result-3"),
    document.getElementById("player-result-4"),
    document.getElementById("player-result-5"),
    document.getElementById("player-result-6")
  ];
  var computerTable = [
    document.getElementById("computer-result-1"),
    document.getElementById("computer-result-2"),
    document.getElementById("computer-result-3"),
    document.getElementById("computer-result-4"),
    document.getElementById("computer-result-5"),
    document.getElementById("computer-result-6")
  ];

  playerTable[j].innerHTML = playerToss[j];
  computerTable[j].innerHTML = computerToss[j];


  if(j == 5){
    j = 0; //reset

    for (var i = 0; i < playerToss.length; i++) {
      playerResult = playerResult + playerToss[i];
      computerResult = computerResult + computerToss[i];
      result = playerResult > computerResult;
    }
    
    document.getElementById("player-tot").innerHTML = playerResult;
    document.getElementById("computer-tot").innerHTML = computerResult;

    if(result){
      alert("Hai vinto!");
    }
    else{
      alert("Hai perso!");
    } // /IF
  }// /IF


  j = ++j;
});
