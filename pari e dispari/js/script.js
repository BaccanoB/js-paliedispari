// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
do {
    var parolaUtente = prompt("Inserisci la tua scelta. Pari o Dispari?");
    console.log(parolaUtente);
} while (parolaUtente !== "pari" || parolaUtente !== "dispari") ;


do {
    var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 5!"));
    console.log("numero utente",numeroUtente);
} while (isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroRandom(numero) {
    return Math.floor((Math.random() * 5) +1);
}

var numeroComputer = numeroRandom(numeroUtente);
console.log("numero computer",numeroComputer);

// Sommiamo i due numeri
var somma = numeroUtente + numeroComputer; 
console.log("somma",somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariDispari(num) {
    if (num % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

var risultato = pariDispari(somma);
console.log("Il risultato della somma è",risultato);

// Dichiariamo chi ha vinto.

if (parolaUtente.toLowerCase() == risultato.toLowerCase()) {
    console.log("Complimenti hai vinto!");
} else {
    console.log("Mi dispiace hai perso!");
}


if ((parolaUtente !== "pari") || (parolaUtente !== "dispari")) {

}