/* Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.

Write a function that takes one parameter
Parameter 1 - An Array of strings
The function should output an array containing all the strings from the input array but in alphabetical order
Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
sort(myArray);
Output - ['cat', 'dog', 'human', 'mouse']
*/

var myArray = ['mouse', 'cat', 'dog', 'human']

function sortingArray(someArray){
    someArray.sort()
    console.log(someArray)
}

sortingArray(myArray);