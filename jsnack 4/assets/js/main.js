var output = document.getElementById("output");
var inserisciNome = prompt("inserisci il tuo nome")
var nomi = ["pippo", "marco", "pluto", "annibale", "lorenzo", "pippo", "paperino", "federico", "pippo", ];
var flag = false;


for (let i = 0; i < nomi.length && !flag; i++) {

    if (nomi[i] == inserisciNome) {
        flag = true;
    }
}

if (flag) {
    output.innerHTML = "il tuo nome esiste"
} else {
    output.innerHTML = "il tuo nome non esiste"
}