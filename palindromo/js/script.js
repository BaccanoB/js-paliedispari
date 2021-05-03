// Chiedere all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola e scopri se è palindroma!")
console.log(parolaUtente);
// Creare una funzione per capire se la parola inserita è palindroma


//  var parolaDivisa = parolaUtente.split("");
//  console.log(parolaDivisa);

//  parolaDivisa = parolaDivisa.reverse();
//  console.log(parolaDivisa);

//  var parolaAlContrario = parolaDivisa.join("");
//  console.log(parolaAlContrario);


function parolaAlContrario(parola) {
    var parolaEndStart = parola.split("");
    parolaEndStart = parolaEndStart.reverse();
    parolaEndStart = parolaEndStart.join("");
    return parolaEndStart;
}

function palindroma(parola, parolaReverse) {
    return parolaUtente == parolaCapovolta;
}

/*
function palindroma(parola) {
    var parolaCapovolta = parolaAlContrario(parola);
    return parola == parolaCapovolta;
}

if (palindroma("anna")) {

} else {

}
*/

var parolaCapovolta = parolaAlContrario(parolaUtente);
console.log(parolaCapovolta);

if (palindroma(parolaUtente, parolaCapovolta)) {
    console.log("Si! La parola inserita è una parola palindroma!");
    document.getElementById("parola_scelta").innerHTML = "Si! La parola inserita è una parola palindroma!"
} else {
    console.log("No! La parola inserita non è una parola palindroma!");
    document.getElementById("parola_scelta").innerHTML = "No! La parola inserita non è una parola palindroma!"
}