// Chiedere all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola e scopri se è palindroma!")
// Creare una funzione per capire se la parola inserita è palindroma


// var parolaDivisa = parolaUtente.split("");
// console.log(parolaDivisa);

// var parolaDivisa = parolaDivisa.reverse();
// console.log(parolaDivisa);

// var parolaAlContrario = parolaDivisa.join("");
// console.log(parolaInvertita);


function parolaAlContrario(parola) {
    var parolaEndStart = parola.split("");
    var parolaEndStart = parola.reverse();
    var parolaEndStart = parola.join("");
    return parolaEndStart;
}

var parolaCapovolta = parolaAlContrario(parola);

for (var i = 0; i < parolaUtente.length; i++) {
    if ( parolaUtente == parolaCapovolta){
        console.log("Si! la parola inserita è palindroma!");
    } else {
        console.log("No! la parola inserita non è palindroma!");
    }
}