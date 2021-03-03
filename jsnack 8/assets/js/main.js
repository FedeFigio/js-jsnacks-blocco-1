var output = document.getElementById("output")

var inserisciNumero = String(prompt("inserisci un numero con 2 o piu cifre ed io faro la somma"));

var daSommare = 0
var somma = 0

for (let i = 0; i < inserisciNumero.length; i++) {

    daSommare = parseInt(inserisciNumero[i])
    somma = somma + daSommare
}
output.innerHTML = "il tuo numero era " + inserisciNumero + " e la somma fa: " + somma