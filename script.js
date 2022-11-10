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

let first_price = distance * 0.21;

if (age < 18) {
    var final_price = first_price- 0.2 * first_price;
} else if (age >= 65) {
    var final_price = first_price - 0.4 * first_price;
} else {
    var final_price = first_price;
};

let final_price_decimal = final_price.toFixed(2);

console.log(final_price_decimal)