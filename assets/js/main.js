// ask the user the number of kilometers he has to travel
var numberKilometers = parseInt( prompt ("How many kilometers do you have to travel to reach your destination?") );

document.getElementById("number_kilometers").innerHTML = numberKilometers + " Km";

// conditional on the number of kilometers
if ( numberKilometers < 5 || numberKilometers > 1493 ) {
    alert("The distances traveled by our trains vary from a minimum of 5 kilometers to a maximum of 1493 kilometers. We apologize if we are unable to travel the route you want!")
} else if (isNaN (numberKilometers) ) {
    alert("The entered value must be a number between 5 and 1493.")   
} else {

};

// ask the user his age
var userAge = parseInt( prompt ("How old are you?") );

// conditional user age
if ( userAge < 10 || userAge > 80 ) {
    alert("The company accepts passengers between 10 and 80 years old, for ages not covered in this range consult the 'HELP' section.")
} else if (isNaN (userAge) ) {
    alert("The entered value must be a number between 10 and 80.")   
} else {

};

// create the ticket cost variable
var costTicket = numberKilometers * 0.21;

document.getElementById("cost").innerHTML = (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(costTicket));

// create the discount variables
var discount;

// conditional discount
if (userAge < 18){
    discount = (costTicket * 20) / 100;
} else if (userAge > 64) {
    discount = (costTicket * 40) / 100;
} else {
    discount = 0;
}

document.getElementById("cost_discount").innerHTML = (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(discount));


// create the total ticket cost variable
var costTotalTicket = costTicket - discount;

document.getElementById("cost_ticket").innerHTML = (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(costTotalTicket));

// create discount text variable
var dicountText;

// conditional discount text
if (userAge < 18){
    discountText = "Discount under 18 years";
}else if (userAge > 64) {
    discountText = "Discount over 65 years";
} else {
    discountText = "No discount";
}

document.getElementById("discount_text").innerHTML = discountText;

