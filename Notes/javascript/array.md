## syntax

var animals = ["dog", "cat", "duck", "elephant"];

//ways to initialize an empty array
var animals = [];
var animals = new Array();

// access an element
animals[0] //"dog"

//modify an element
animals[1] = "snake";

//add an element
animals[4] = "lion"; 
//if an index is skipped, that coresponding element will become undefined

length property

//Arrays can hold different types of data
var random_collection = [49, true, "hero", null];


## properties

## methods
array.push("element"); //add the new element to the end of an array, returns the new length of the array
array.pop(); //returns the last element

array.unshift("element") //add the element to the beginning of an array
array.shift();

array.indexOf(); //return the index of first occrancy of the given element, return -1 if there is no such element

array.slice(startInd, endInd); //from start to end-1, return [] if start > end, original array is unaltered
// can use slice to copy an array .slice()

## array iteration
for (var i=0; i<array.length; i++) {
    console.log(array[i]);
}

array.forEach(someFunction(element) {
    doSomething;
});

Thanks for your question, Carmen and for your help Kelvin.
If you only give one argument, then it's the element, every time.
If you give two, then it's the element, then the index, in that order.
If you give three, then it's element, index, and array, in that order.
Please let us know if you have any further questions.
