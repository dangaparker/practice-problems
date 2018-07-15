function capitalize(someString){
    var newString = '';
    for(letter_index = someString.length - 1; letter_index >= 0; letter_index = letter_index -1){
        if(letter_index %2 !== 0){
            newString = (someString[letter_index].toUpperCase()) + newString
        }
        else{
            newString = someString[letter_index] + newString
        }
        console.log(newString)
    }
}


console.log(capitalize("amazing"))
