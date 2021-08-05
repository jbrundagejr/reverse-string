function reverseString(str) {
  // create an empty array to push letters into
  let newWord = []
  // iterate over the passed in word starting at the end and making your way to the beginning
  for(i = str.length; i > 0; i--){
    // grab the last letter of the word and put it in the empty array
    let lastLetter = str[i - 1]
    newWord.push(lastLetter)
  }
  // make that new array into a string
  return newWord.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
