// Start with an array of strings. Print only the words that include the letter combination "ing".
// define an array. put words in it that have ing in them and words that don't have ing in them.
// write code to pull the ing words and print them. but not the others. 
// I'm not sure how to look for a "ing" so will need to look that up. But am thinking it's a lot like the previous challenges. After researching, I'm not totally sure. I'm going to try contains(). And I think an if statement would be good. Look up syntax for if. 
// tried it with: if (words[i].contains("ing")) {
 //   }
// and got TypeError: words[i].contains is not a function
// googled again, going to try: includes(). now it prints everything. not just ing words. after adjusting { } and including, then not including then including "" again around "ing" it worked! 


var words = ["Ing", "NOTthing", "Cat", "Dog", "Thing", "Thing2"]

for (i = 0; i < words.length; i++) {
    if (words[i].includes("ing")) {    
    console.log(words[i]);
    }
}