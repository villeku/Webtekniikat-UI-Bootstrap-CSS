/*Hyvin yksinkertainen laskuri vain näyttämään että buttonit tekevät jotain.*/

let numero = 100;

document.getElementById("add").onclick = function () {
    numero = numero + 1;
    document.getElementById("laskuri").innerHTML = numero;
}

document.getElementById("minus").onclick = function () {
    numero = numero - 1;
    document.getElementById("laskuri").innerHTML = numero;
}

document.getElementById("jaa").onclick = function () {
    numero = numero / 2;
    document.getElementById("laskuri").innerHTML = numero;
}

document.getElementById("multiply").onclick = function () {
    numero = numero * 2;
    document.getElementById("laskuri").innerHTML = numero;
}
