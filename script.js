function Price() {
    let distance = document.getElementById("formDistanceInput").value;

    // --- Questo viene fatto nel caso in cui l'utente imetta i chilometri con la virgola --- //
    let right_distance = distance.replace(",", ".");

    let distanceNaN = isNaN(right_distance);

    if (distanceNaN || right_distance <= 0) {
        console.error("Per favore, imettere un numero valido di chilometri.")
    };

    let fare = document.getElementById("FareSelect");
    let value_fare = fare.value

    console.log(value_fare)

    let first_price = right_distance * 0.21;

    if (value_fare == 2) {
        var final_price = first_price - 0.2 * first_price;
    } else if (value_fare == 3) {
        var final_price = first_price - 0.4 * first_price;
    } else {
        var final_price = first_price;
    };

    let final_price_decimal = final_price.toFixed(2);

    document.getElementById("ticket_price").innerHTML = "PREZZO:" + final_price_decimal + "€";

    let random_number = Math.floor((Math.random() * 99999999) + 10000000);

    document.getElementById("ticket_number").innerHTML = random_number;

    console.log(
        `
    ------------------------------------Prezzo finale del biglieto-------------------------------------

    Il prezzo finale del vostro biglieto (applcando eventuali sconti) risulta: ${final_price_decimal} € 

    ---------------------------------------------------------------------------------------------------

    `
    );
}