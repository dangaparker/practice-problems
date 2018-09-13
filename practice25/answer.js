/*
Create a function, add_arrays(), that does the following:

Input: 2 arrays of equal size
first_array, an array of numbers
needle array, an array of numbers
Output:
output array, which has all values from the first array added to the values from the second array
Example:
var first_array = [3,-5,15,4]; var second_array = [3,18,-5,-4]

output = add_arrays(first_array,second_array); console.log(output); //outputs [6,13,10,0];
*/

var firstA = [2, 5, 8, -3, 0, -1, 4]
var secondA = [7, 1, -9, 10, 4, 2, 5]

function addArrrays(array1, array2){
  var finalArray=[]
    for(var i = 0; i<array1.length; i++){
      for(var k = 0; k< array2.length; k++){
        if(i == k){
          var newSum = array1[i]+array2[k]
          finalArray.push(newSum)
          return(finalArray)
        }
      }
    }
}

addArrrays(firstA, secondA)