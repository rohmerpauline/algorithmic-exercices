// STRINGS

// I- Concatenation

// Write a function which receives two strings and returns them as one string.

function addStrings(firstSentence, secondSentence) {
    return firstSentence + ", " + secondSentence;
}
console.log(addStrings("My name is Pauline", "I am 28"));
console.log(addStrings("I'm trying out Javascript", "it's working"));

// II- Lowercase

// Write a function which receives a character in uppercase and prints it in lowercase.

function LowerCase (str) {
    return str.toLowerCase();
}
console.log(LowerCase("I AM PAULINE"));
console.log(LowerCase("YEEEEEEES IT'S WORKING"));

// III- Uppercase

//Write a function which receives a string in lowercase and returns an uppercase sentence.

function UpperCase (str) {
    return str.toUpperCase();
}
console.log(UpperCase("it's also working"));
console.log(UpperCase("i'm happy about it"));

// IV- Convert name

//Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"

function subString (str1) {
    return str1.substring(5,9) + " " + str1.substring(0,3);
}
console.log(subString("Doe, John"));

// V- Whitespace

// Write a function which receives a sentence full of whitespace and returns it without them.

function removeWhiteSpace (str) {
    return str.split(" ").join("");
}
console.log(removeWhiteSpace("I am trying to remove white space"));
console.log(removeWhiteSpace("I managed to remove white space"));


