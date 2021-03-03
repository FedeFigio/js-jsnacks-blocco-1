var output = document.getElementById("output");

var inserisciNumero = parseFloat(prompt("inserisci un numero ed io faro il quadrato di tutti i numeri fino a quello inserito"));


for (let i = 0; i < inserisciNumero; i++) {
    output.innerHTML += "Il cubo di " + i + " é " + Math.pow(i, 3) + "<br>";
    console.log(i, Math.pow(i, 3));
}