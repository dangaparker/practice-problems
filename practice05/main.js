function fizzBuzz(){
    for(var i=0; i<= 100; i++){
        if(i %3 === 0){
            console.log(i + ' :fizz');
        }
        if (i %5 ===0){
            console.log(i + ': buzz')
        }
        if (i %5 === 0 && i %3 ===0){
            console.log(i + ': fizzbuzz')
        }
    }
}
fizzBuzz()