var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
//biggerWords('whales', myArray);
//Output - ['reptile', 'mammoth', 'turtles']


function bigWords(str, someArray){
  var wordLength = str.length;
  for(var i = 0; i<someArray.length; i++){
    if (someArray[i].length > wordLength){
      console.log(someArray[i])
    }
  }
      
}
bigWords('whales', myArray);