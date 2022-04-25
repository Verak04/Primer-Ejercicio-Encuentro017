alert("Ingresar tres numeros a leccion:");
let num1 = prompt("Ingresa el 1º numero:");
let num2 = prompt("Ingresa el 2º numero:");
let num3 = prompt("Ingresa el 3º numero:");
if (num1 < num2) {
    if (num1 < num3) {
        alert("El numero " + num1 + " es el menor")
    }
    else {
        alert("El numero " + num3 + " es el menor")
    }
}
else {
    if (num2 < num3) {
        alert("El numero " + num2 + " es el menor")
    }
    else {
        alert("El numero " + num3 + " es el menor")
    }
}
if (num1 > num2) {
    if (num1 > num3) {
        alert("El numero " + num1 + " es el mayor")
    }
    else {
        alert("El numero " + num3 + " es el mayor")
    }
}
else {
    if (num2 > num3) {
        alert("El numero " + num2 + " es el mayor")
    }
    else {
        alert("El numero " + num3 + " es el mayor")
    }
}