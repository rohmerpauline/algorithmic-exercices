// VARIABLES

// I- CALCULATE

// The SUM and the DIVISION of two chose number

/* PSEUDOCODE
//This algorithm will output 12 and 5
integer number1 = 10;
interger number2 = 2;
ouput($number1 + $number2);
output($number1 / $number2)
*/

//JavaScript
let number1 = 10;
let number2 = 2;
console.log(number1 + number2);
console.log(number1 / number2)

// The MODULO of two inputed numbers

/* PSEUDOCODE
//This algorithm will output 2
integer number3;
integer number4;
input("Give a number", $number3);
input("Give another number", $number4);
output($number3 mod $number4);
*/

//JavaScript
let number3 = 12;
let number4 = 5;
console.log(number3 % number4);


// II- CONCATENATE SENTENCE

// CONCATENATE two phrases together

/* PSEUDOCODE
//This algorithm will output "My name is Pauline, I am 28"
character nameSentence = "My name is Pauline";
character ageSentence = "I am 28";
ouput($name & ", " & $age);
*/

//JavaScript
let nameSentence = "My name is Pauline";
let ageSentence = "I am 28";
console.log(nameSentence + ", " + ageSentence);

// III- VAT 

// Receive a price without VAT and returns the price with VAT with a rate of 21%

/* PSEUDOCODE
integer price;
input("Give a price", $price);
constant VAT = $price * 0.21;
output(($price + $VAT) & " €")
*/

//JavaScript
//This algorithm will output 121 €
let price = 100;
let vat = price * 0.21;
console.log(price + vat + " €");

// IV- Surface of a circle

// Receive a price without VAT and returns the price with VAT with a rate of 21%

/* PSEUDOCODE
integer radius;
input("Give the radius of a circle", $radius);
output(radius**2 * PI);
*/

//JavaScript
//This algorithm will output 28.274333882308138
let radius = 3;
console.log(radius**2 * Math.PI);

// V- Conversion of time to seconds

// This algorithm will receives the time of day in 3 different number, the hour, the minutes and the seconds and return the number of seconds since midnight

/* PSEUDOCODE
constant heure;
constant minutes; 
constant secondes;
input("What time is it, hour ?", $heure);
input("What time is it, minutes ?", $minutes);
input("What time is it, secondes ?", $secondes);
ouput($heure*3600 + $minutes*60 + $secondes & " secondes")
*/

//JavaScript
//This algorithm will output 81932 secondes
let heure = 22;
let minutes = 45;
let secondes = 32;
console.log(heure*3600 + minutes*60 + secondes + " secondes");