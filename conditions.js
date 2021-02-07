// CONDITIONS

// I- Cinema tariffs

// In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.

/* PSEUDOCODE
variable reducedPrice = 8;
variable fullPrice = 10;
variable age;
output("What is your age ?", $age);
if ($age <=18) then {
    output("You need to pay " & $reducedPrice & " €.")
} else {
    output("You need to pay " & $fullPrice & " €.")
}
*/

//JavaScript
let fullPrice = 10;
let reducedPrice = 8;
let age = 21;
if (age <= 18) {
    console.log("You need to pay " + reducedPrice + " €.")
} else {
    console.log("You need to pay " + fullPrice + " €.")
}

// II- Maximum

// Write an algorithm which given 3 numbers finds the maximum.

/* PSEUDOCODE
integer number1 = 6;
integer number2 = 8;
integer number3 = 2;
if ($number1 > $number2 AND $number2 > $number3) then {
    output($number1 & " is the highest number.");
} else if ($number2 > $number1 AND $number2 > $number3) then {
    output($number2 & " is the highest number.");
} else {
    output($number3 & " is the highest number.");
}
*/

//JavaScript
let number1 = 6;
let number2 = 8; 
let number3 = 2;
if (number1 > number2 && number1 > number3) {
    console.log(number1 + " is the highest number.");
} else if (number2 > number1 && number2 > number3) {
    console.log(number2 + " is the highest number.");
} else {
    console.log(number3 + " is the highest number.")
}

// III- Identical dice

// Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.

/* PSEUDOCODE
integer dice1 = random(5)+1;
integer dice2 = random(5)+1;
integer dice3 = random(5)+1;
if (dice1 == dice2 AND dice1 == dice3) then {
    output("Three dices are identical");
} else if (dice1 != dice2 AND dice2 != dice3 AND dice1 != dice3) then {
    output("No dice are identical");
} else {
    output("Two dices are identical");
}
*/

//JavaScript
let dice1 = Math.floor(Math.random()*5)+1;
let dice2 = Math.floor(Math.random()*5)+1;
let dice3 = Math.floor(Math.random()*5)+1;
if (dice1 == dice2 && dice1 == dice3) {
    console.log(dice1, dice2, dice3);
    console.log("Three dices are identical");
} else if (dice1 != dice2 && dice2 != dice3 && dice1 != dice3) {
    console.log(dice1, dice2, dice3);
    console.log("No dice are identical");
} else {
    console.log(dice1, dice2, dice3);
    console.log("Two dices are identical");
}

// IV- Day's number

// Write an algorithm which given the number of a day returns its name.

/* PSEUDOCODE
integer day = input("Quel est le numéro du jour de la semaine ?");
    in case $day equal
        1 : output("This is Monday");
    in case $day equal
        2 : output("This is Tuesday");
    in case $day equal
        3 : output("This is Wednesday");
    in case $day equal 
        4 : output("This is Thursday");
    in case $day equal 
        5 : output("This is Friday");
    in case $day equal 
        6 : output("This is Saturday");
    in case $day equal
        7 : output("This is Sunday");
    default :
        output("This is not a day's number");
*/

//JavaScript
let day = Math.floor(Math.random()*6)+1; //to give a random number for the day between 1 and 7
console.log(day); // to check if it's working
switch (day) {
    case 1 : 
        console.log("This is Monday");
    break;
    case 2 : 
        console.log("This is Tuesday");
    break;
    case 3 : 
        console.log("This is Wednesday");
    break;
    case 4 : 
        console.log("This is Thursday");
    break;
    case 5 : 
        console.log("This is Friday");
    break;
    case 6 : 
        console.log("This is Saturday");
    break;
    case 7 : 
        console.log("This is Sunday");
    break;
    default : 
        console.log("This is not a day's number");
}

// V- Print Shop

// A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.

/* PSEUDOCODE
integer numberOfCopies = input("How many copies do you need ?");
if (numberOfCopies <=10) then {
    output((numberOfCopies * 12)/100 & " euros")
} else if (numberOfCopies > 10 AND numberOfCopies <=30) then {
    output((10*12 + (numberOfCopies-10)*11)/100 & " euros")
} else {
    output(((10*12 + 20*11 + (numberOfCopies-30)*10)/100) & " euros")
}
}
*/

//JavaScript
let numberOfCopies = 30;
if (numberOfCopies <=10) {
    console.log((numberOfCopies * 12)/100 + " euros")
} else if (numberOfCopies > 10 && numberOfCopies <=30) {
    console.log((10*12 + (numberOfCopies-10)*11)/100 + " euros")
} else {
    console.log(((10*12 + 20*11 + (numberOfCopies-30)*10)/100) + " euros")
}

//Mettre nombre entier 12 et non 0.12 centimes pour éviter les erreurs de programme