// LOOPS

// I- Print numbers

// Write an algorithms which receives an integers n and prints:

//JavaScript
let number1 = 1;
for (number1; number1 <= 9; number1++) {
    console.log(number1);
}

let number2 = 9;
for (number2; number2 >= 1; number2--) {
    console.log(number2);  
}

let number3 = -9;
for (number3; number3 <= 9; number3++) {
    console.log(number3);
}

let number4 = 1;
for (number4; number4 <= 10; number4+=2) {
    console.log(number4);
}

// II- Print random number

// Write an algorithm which receives an random integer and prints from 0 to it.

/* PSEUDOCODE
integer randomNumber = random(10);
integer count;
for (count=0; count <= randomNumber; count++) {
    output(count);
}
*/

//JavaScript
let randomNumber = Math.floor(Math.random()*10);
let count;
for (count= 0; count <= randomNumber; count++) {
    console.log(count);
}

// III- Throw dices

// Write an algorithm which receives an random integer and prints from 0 to it.

/* PSEUDOCODE
integer count = 0;
for (integer throwDices = 0; $throwDices <=9; $throwDices++) {
    integer dices = random(5)+1;
    output($dices);
    if ($dices == 5) {
        count +=1;
    }
}
*/

//JavaScript
let count5 = 0;
for (let throwDices = 0; throwDices <= 9; throwDices++) { //10 lancés de dés
    let dices = Math.floor(Math.random()*5)+1;
    if (dices == 5) {
        count5 += 1;
    }
}
console.log(count5);

// IV- Even number

// Write an algorithm which prints all the even numbers from 0 to a given number.

/* PSEUDOCODE
integer evenNumbers = 0;
for (evenNumbers; evenNumbers <= 10; evenNumbers+=2) {
    output(evenNumbers)
}
*/

//JavaScript
let evenNumbers = 0;
for (evenNumbers; evenNumbers <= 10; evenNumbers+=2) {
    console.log(evenNumbers)
}

// V- Perfect Number

// Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).

/* PSEUDOCODE
integer evenNumbers = 0;
for (evenNumbers; evenNumbers <= 10; evenNumbers+=2) {
    output(evenNumbers)
}
*/

//JavaScript
let number = 28;
let temp = 0;
    for(let  i=1; i<=number/2; i++) {
        if(number%i === 0) {
            temp += i;
        }
     } 
    if(temp === number && temp !== 0) {
       console.log("It is a perfect number.");
    } else {
       console.log("It is not a perfect number.");
        }