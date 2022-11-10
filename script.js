/*let distance = prompt("Quanti chilometri intende percorrere?");

// --- Questo viene fatto nel caso in cui l'utente imetta i chilometri con la virgola --- //
let right_distance = distance.replace(",", ".");

let distanceNaN = isNaN(right_distance);

if (distanceNaN || right_distance <= 0) {
    console.error("Per favore, imettere un numero valido di chilometri.")
};

let age = prompt("Indichi la sua età");
let ageNaN = isNaN(age);

if (ageNaN || age <= 0) {
    console.error("Per favore, imettere un'età vailda.")
};

let first_price = right_distance * 0.21;

if (age < 18) {
    var final_price = first_price - 0.2 * first_price;
} else if (age >= 65) {
    var final_price = first_price - 0.4 * first_price;
} else {
    var final_price = first_price;
};

let final_price_decimal = final_price.toFixed(2);

console.log(
    `
    ------------------------------------Prezzo finale del biglieto-------------------------------------

    Il prezzo finale del vostro biglieto (applcando eventuali sconti) risulta: ${final_price_decimal} € 

    ---------------------------------------------------------------------------------------------------

    `
);

*/