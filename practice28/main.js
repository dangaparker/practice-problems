var numArray = [1000, 500, 100, 50, 10, 5, 1]
var romanArray = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
var romanVal = ''
function convertToRomanNumeral(someNumber){
    
    debugger
       
        while(someNumber!==0){
            for(var i = 0; i < numArray.length && numArray[i]; i++){
                if(someNumber > numArray[i]){
                someNumber = someNumber - numArray[i]
                romanVal = romanVal + romanArray[i]
                
                
            }
           
            

        }
        return(romanVal);
    }
    
}

console.log(convertToRomanNumeral(96))
/*
else if(someNumber < numArray[i]){
    break;
}
else if(someNumber === numArray[i]){
    romanVal = romanVal + romanArray[i]
    
}
else if(someNumber <= 0){
    return;
}
*/