var output = document.getElementById("output")


var flag = true;

for (let i = 0; flag; i++) {

    var potenzaDue = Math.pow(i, 2)

    if (potenzaDue >= 1000) {
        flag = false;
    }


    output.innerHTML += i + " " + potenzaDue + "<br>"
}