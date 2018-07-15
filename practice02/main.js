var myArray = ['hello', 45, 'Bob', 'what', '23'];

function reverse_array(some_Array){
    var newArray = []
    for(var array_values = some_Array.length - 1; array_values >= 0; array_values--){
        newArray.push(some_Array[array_values]);
        console.log(newArray)
    }

}

reverse_array(myArray);