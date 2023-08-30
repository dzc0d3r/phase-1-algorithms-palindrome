function isPalindrome(word) {
  // Write your algorithm here
  // make sure the string is all in lower case
  word.toLowerCase()
  return word === word.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  make sure the string is all in lower case
  compare the string (ltr) and its reversed string (rtl)
  if it's the same return true 
  otherwise false
*/

/*
  Add written explanation of your solution here
  if the reverse string is equal to the normal string 
  the word is a palindrome
  otherwise it's not 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
