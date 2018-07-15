/*
Build a function that sorts an array into a multidimensional array grouped by data type

Write a function that takes one parameter
Parameter 1 - An array of anything
The function should output a multidimensional array grouped by data type
Example:
var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
groupArray(myArray);
Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]
*/

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];


function sortArray(someArray){
    var finalArray = [];
    var stringArray = [];
    var numberArray = [];
    var booleanArray = [];
    for(var i = 0; i<someArray.length; i++){
        if(typeof someArray[i] == 'string'){
            stringArray.push(someArray[i])
        }
        if(typeof someArray[i] == 'number'){
            numberArray.push(someArray[i]);
        }
        if(typeof someArray[i] == 'boolean'){
            booleanArray.push(someArray[i]);
        }

    }
    finalArray.push(stringArray, numberArray, booleanArray)
    console.log(finalArray);
}
console.log(sortArray(myArray));