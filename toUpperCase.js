//following this article: https://picocoder.io/how-to-capitalize-the-first-letter-of-a-string-in-javascript/
// charAt(0) it gets the first character of the string, toUpperCase() make the character uppercase and then using the + operator we concatenate the 
//result of the previous functions to the word.slice(1) function, which will return the string after the first character.
var text= 'this is a title , capitalize every word, I Like Pizza, PIZZA PIZZA PIZZA';


var toUpperCaseString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(); 
var UpperCaseWords = (str) => str.split ('').map(toUpperCaseString ).join('');

console.log(UpperCaseWords (text));

