var numeroMaggioreEl = document.getElementById("numeroMaggiore")

var num1 = prompt("numero1")
var num2 = prompt("numero2")


if (num1 > num2) {
    numeroMaggioreEl.innerHTML = num1
} else {
    numeroMaggioreEl.innerHTML = num2
}