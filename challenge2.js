// 1. Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// make an array with strings. Each string should have upper and lower case letters in it. Write code to print every element in the array, and change all letters to lowercase.
// a for statement will loop through the array. we will need to tell the code that we want everything lowercase .toLowerCase() does that.

var lowerCase = ["Some",  "woRDS", "ANDsomeMOre","WORDS", "allARELOWERcase"]
for (i = 0; i < lowerCase.length; i++) {
    console.log(lowerCase[i].toLowerCase());
}
