let distance = prompt("Quanti chilometri intende percorrere?");
let distanceNaN = isNaN(distance);

if (distanceNaN || distance <= 0) {
    console.log("Per favore, imettere un numero valido di chilometri.")
};

let age = prompt("Indichi la sua età");
let ageNaN = isNaN(age);

if (ageNaN || age <= 0) {
    console.log("Per favore, imettere un'età vailda.")
};





let first_price = distance * 0.21