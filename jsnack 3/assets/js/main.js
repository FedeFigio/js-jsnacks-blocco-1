var numeroMaggioreEl = document.getElementById("somma")

var somma = 0

for (let i = 0; i < 10; i++) {
    var num1 = parseInt(prompt("numero1"))
    somma = somma + num1
}

numeroMaggioreEl.innerHTML = somma