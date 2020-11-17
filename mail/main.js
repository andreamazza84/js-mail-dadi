//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//Elenco casuale delle persone registrate
var emails =
["nome.cognome@email.com",
"fabiola.gardin@email.com",
"raffaele.giammario@email.com",
"andrea.mazza@email.com",
"fabio.pacifici@email.com",
"mirko.saponaro@email.com",
"alfredo.lozano@email.com",
"andrea.dicataldi@email.com",
"andrea.iaglio@email.com",
"romina.traezzi@email.com",
"francesco.olivotti@email.com",
"alessandro.internicola.email.com",
"raffaele.baldassarre@email.com",
"matteo.busicchio@email.com"];

//Richiedi all'utente l'email
var userEmail = prompt("Inserisci la tua email es. nome.cognome@email.com");
var validation = 0;

//Confronto l'email inserita dall'utente con quelle presenti nella lista iniziale. Se la condizione si verifica "validation" passa da 0 a 1.
for(i = 0; i < emails.length; i++){
  if (userEmail == emails[i]) {
    validation = ++validation;
    console.log("validation ", validation);
  }
}

if(validation > 0){
  alert("Puoi accedere all'area riservata");
}
else{
  alert("Devi prima registrarti per poter accedere all'area riservata");
}
