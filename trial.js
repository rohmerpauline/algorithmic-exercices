// TRIAL 

// I - list of random numbers

// Write a function which returns an array of n random numbers, n being the only received parameter.

let arrayOfRandom = [];
function randomArray(n) {
        arrayOfRandom.push(n);
    }

randomArray(Math.floor(Math.random()*10));
randomArray(Math.floor(Math.random()*10));
randomArray(Math.floor(Math.random()*10));
randomArray(Math.floor(Math.random()*10));
randomArray(Math.floor(Math.random()*10));
randomArray(Math.floor(Math.random()*10));

console.log(arrayOfRandom)

// II- Translate

/* 
function in_array(element,list_elements) {
	boolean exist = false
	for I = 0 until length($list_elements) do {
		if $element == $list_elements[I] then {
			$exist = true
		}
	}
	return $exist
}
*/

// Function to check if an element is or isn't inside an array. If the element is inside the array, the console will output true, if the element isn't inside the array, the console will output false. 

//JavaScript

function in_array (element, list_elements) {
    let exist = false;
    for (let i = 0; i < list_elements.length; i++) {
        if (element == list_elements[i]) {
            exist = true; 
        }
    }
    console.log(exist);
}

let arrayTest = [4, 6, 3, 7, 8];
in_array(3, arrayTest);
in_array(1, arrayTest);

// III - Sort an array

//Write a function which receives an array of ten random integers as parameter and returns an ascendantly ordered array of integers.

let array_length = 9;
let arrayRandom = [];
for (let i = 0; i < array_length; i++) {
    arrayRandom.push(Math.random());
};
console.log(arrayRandom);