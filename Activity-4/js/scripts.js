var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');
// Store the greeting in a variable
var greeting = 'Hello ';

// Store the users name in a variable
var name = 'Sherlyn';

/* Create the welcome message by concatenating the strings in the two variables */
var welcomeMessage = greeting + name + '!';

// Get the element that has an id of greeting
var el = document.getElementById('greeting');

// Create variables for the welcome message
var greeting = 'Hello ';
var name = 'Sherlyn';
var message = ', please check your order:';

// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var myElement = document.getElementById("price");
var myElement = document.getElementById("student-price");
var price = 20,
    studentDiscount=.10,
    studentPrice=price - (price*studentDiscount);
var sign = 'IT Dev 160';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;