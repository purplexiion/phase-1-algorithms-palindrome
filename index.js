function isPalindrome(word) {
    let changeLetters = /[\W_]/g;
    let replaceChangeWord = word.toLowerCase().replace(changeLetters, '');
    let reverseWord =
        replaceChangeWord.split('').reverse('').join('');
    if (reverseWord === replaceChangeWord) {
        return true
    } else return false
}


// Write your algorithm here
/* 
  Add your pseudocode here
Start
input word
if the word == drow(palindrome),
then output =true
else output =false
return word, output
stop
*/

/*
  Add written explanation of your solution here
  /W matches any non-word characters, removes all non-alphanumeric characters  and is equivalent to A-Z,a-z and 0-9
RegExp - remove unwanted characters denoted by either [\W_]//G OR /[^A-Za-z0-9]/g;
So we use that to remove all the characters that are not part of the format given
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