// //Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
var numeroPc = [];
var numeriUtente = [];
for (var i = 0; i <= 15; i++) {
    numeroPc.push(generaNumeroPc(1,100));

}
console.log(numeroPc);

function generaNumeroPc(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
do {
    var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
    console.log(numeroUtente);
    numeriUtente.push(numeroUtente);
    console.log((!numeroPc.includes(numeroUtente)));
    console.log(numeriUtente.length);
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).

// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
} while ((numeriUtente.length <= 84) && (!numeroPc.includes(numeroUtente)));

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

console.log('Numero di giocate effettuate prima di perdere ' + numeriUtente.length);

// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50
