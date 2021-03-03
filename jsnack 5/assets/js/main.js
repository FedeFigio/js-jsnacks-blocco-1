var output = document.getElementById("output")

var array = [];

for (let i = 0; i < 6; i++) {
    var inserisciNumero = parseFloat(prompt("inserisci un numero"))
    array.push(inserisciNumero)
};

output.innerHTML = array