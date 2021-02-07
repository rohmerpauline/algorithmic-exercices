// ARRAY

// I- Print an array

//Write an algorithm which prints everything in an array.

let namesOfFriends = ["Juliette", "Camille", "Marie", "Alban", "Charlie"];

let listOfFriends = namesOfFriends.values();
for (let element of listOfFriends) {
    console.log(element);
}

// II & III - Maximum & Minimum

//Write an algorithm which receives an array of integers and prints its maximum.
// Write an algorithm which receives an array of integers and prints its minimum.


let maxandminNumber = [3, 5, 17, 8, 29, 4, 12, 1];
console.log(Math.max(...maxandminNumber));
console.log(Math.min(...maxandminNumber))

// IV- Minimum position

// Write an algorithm which receives an array of integers and prints the position of its minimum.

console.log(maxandminNumber.indexOf(Math.min(...maxandminNumber)));

// V- Ordered array 

let arrayOrderCheck = [1, 2, 3, 4, 5];
let isOrdered = true;
for (let i=0; i < arrayOrderCheck.length; i++) {
    if (arrayOrderCheck[i] > arrayOrderCheck[i+1]) {
        isOrdered = false;
        }
    }
    if (isOrdered) {
        console.log("In order");
    } else {
        console.log("Not in order");
    }