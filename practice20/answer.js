/*randomize array
Create a function, randomize_list(), that takes an array and ranzomizes the order,
without resorting to the use of any pre-existing array methods.

Input:
input_array: an array of anything
Output:
output_array, the original array, randomly arranged
Example:
var input_array =
[5,3,2,5,1]
output = randomize_list(input_array); console.log(output); //outputs

[3,1,5,5,2]
console.log(randomize_list(input_array)); //outputs

[1,3,5,1,2,5]
Put your solution in answer.js
hint: Math.random() will give you a random fractional number between 0 and 1
hint: .pop() will allow you to take numbers off your source array as you pick them randomly
hint: Using pop will directly affect the length of the array
*/

var input_array = [5,3,2,5,1];
var new_array = [];
function shuffle(someArray){

    while (someArray.length > 0) {
        var random_number = Math.floor(Math.random() * someArray.length);
        var removedValue = someArray[random_number];
        new_array.push(removedValue);
        someArray.splice(random_number, 1);
    }

    console.log(new_array)

}
shuffle(input_array);