var numeroMaggioreEl = document.getElementById("parole")

var parola1 = prompt("parola1")
var parola2 = prompt("parola2")


if (parola1.length < parola2.length) {
    numeroMaggioreEl.innerHTML = parola1 + " " + parola2
} else {
    numeroMaggioreEl.innerHTML = parola2 + " " + parola1
}