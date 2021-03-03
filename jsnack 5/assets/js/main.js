var output = document.getElementById("output")

var array = [];

for (let i = 0; i < 6; i++) {
    var inserisciNumero = parseFloat(prompt("inserisci un numero"))

    if (inserisciNumero % 2 == 1) {
        array.push(inserisciNumero)
    }
};

output.innerHTML = array