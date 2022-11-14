//1. Given an array of strings, return only the strings that have exactly 4 characters.
// Make an array, call and return the strings/ words that have exactly 4 characters from the variable named onlyFour.
// We will need to define the elements in the array by how many characters are in it. And then print only the ones with 4,  === to 4. 

// Pseudo code: 
// Create an array with different words, and different lenghts. 
// will use a for statement to loop through the array.
// Identify which ones have 4 characters, Then print the ones with 4 characters and not the others. This will be an if statement 
// console.log to print the values that match this condition of 4 characters.

var onlyFour = ["Four", "Three", "Five", "Six", "Iam4", "meto"]

for (var i = 0; i < onlyFour.length; i++) {
    if (onlyFour[i].length === 4) {
        console.log(onlyFour[i])
    }
}
