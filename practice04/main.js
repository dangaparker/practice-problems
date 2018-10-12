/* Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.

Write a function that takes one parameter
Parameter 1 - An Array of strings
The function should output an array containing all the strings from the input array but in alphabetical order
Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
sort(myArray);
Output - ['cat', 'dog', 'human', 'mouse']
*/

var myArray = ['mouse', 'cat', 'dog', 'human']

var newArray = ['yesterday', 'dog', 'cat', 'today'];


var arr = [1,3,2];

function bubbleSort(arr){
    var i, j, limit;
    limit = arr.length;
    while(limit--){
        for(i = 0, j = 1; i < limit; ++i, ++j)
            if(arr[i] > arr[j]){
                temp= arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
            
    }
    return arr
}
console.log(bubbleSort(newArray));