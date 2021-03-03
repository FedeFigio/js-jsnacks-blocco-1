var output = document.getElementById("output")

var somma = 0;
var media = 0;

for (let i = 0; i <= 10; i++) {
    somma = somma + i
    media = somma / i

}
console.log(somma);
console.log(media);

output.innerHTML += "la somma dei primi 10 numeri e " + somma + "<br>"
output.innerHTML += "la media dei primi 10 numeri e " + media + "<br>"