var someStr = 'hello my name is Stu'
var news = ['abc', 'def']


console.log(someStr.split(' '))
console.log(news[0].substr(1,news[0].length))

function pigLatin(string){
 var array = string.split(' ');
 var newarray = []
 for (var i = 0; i < array.length; i++){
   for(var k =0; k < array[i].length; k++){
      var firstLetter = array[i][0]
      var halfword = array[i].substr(1, array[i].length)
      var newWord = '' + halfword + firstLetter + 'ay'
      
   }
   newarray.push(newWord)
   
   var newSentence = newarray.join(' ');  
 }
  return newSentence  
}
console.log(pigLatin('hello my name is Stu'))