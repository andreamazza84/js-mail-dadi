//Gioco dei dadi
//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?
//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//3. si ma noi cosa vogliamo fare?
//4. torniamo a scrivere in italiano
//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

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
  j = ++j;
  console.log("j: " + j);
  if(j == 6){
    j = 0; //reset

    for (var i = 0; i < playerToss.length; i++) {
      playerResult = playerResult + playerToss[i];
      computerResult = computerResult + computerToss[i];
      result = playerResult > computerResult;
    }
    // console.log("lancio giocatore " + playerToss[0]);
    // console.log("lancio computer " + playerToss[0]);
    //
    // console.log("giocatore " + playerResult);
    // console.log("computer " + computerResult);
    // /FOR

    if(result){
      alert("Hai vinto!");
    }
    else{
      alert("Hai perso!");
    } // /IF
  }// /IF
});
