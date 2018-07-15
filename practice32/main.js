var x = 'seven'
var y = 'dish'

function find_middle_letters (someString){
    if(someString.length % 2 !==0){
        var halfofstring = Math.floor(someString.length/2);
        console.log(someString[halfofstring])
    }
    else{
        var halfofevenstring = ((someString.length/2)-1);
        var halfofevenstring1 = (someString.length/2);
        console.log(someString[halfofevenstring]+ someString[halfofevenstring1])
    }
}

find_middle_letters('seven')
