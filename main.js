
var hint = document.getElementById('hint');
var box = document.getElementsByClassName('box');
var clue = document.getElementById('clue')
var box = document.getElementsByClassName('box')[0]


window.addEventListener("load", function(){
  createKeyboard()
});


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z'];


var words = ["tigers", "lions", "dog", "cat", "mouse", "panda", "rihno", "lizard"]

var hint = [ "A larged striped cat", "a large cat with a loud roar!", "Woof", "Meow", "what cats chase", "they eat bamboo", "they have two horns", "reptiles" ]



var rando= [Math.floor(Math.random() * words.length)]

var word = words[rando];





var currentWord = word.split("")

var answerArray = [];
for (i = 0; i < word.length; i++){
  answerArray[i]="_"
}

var remainingLetters = word.length


  clue.innerHTML=hint[rando]



box.innerHTML=answerArray.join(" ");
function createKeyboard(){

var wrapper = document.getElementsByClassName('wrapper')[0];

 for(i=0; i<alphabet.length; i++){
       var keys1= document.createElement('div');
       keys1.style.display="inline-block";
       keys1.style.border= "2px solid black";
       keys1.style.width= "30px";
       keys1.style.height="30px";
       keys1.style.borderRadius="10px"
       keys1.innerHTML=alphabet[i];
       keys1.style.backgroundColor="white";
       keys1.className="letter"
       wrapper.appendChild(keys1);


       var answerArray2 = answerArray
          keys1.addEventListener('click', function(event){
              console.log(event.target.innerHTML)
              for (var i = 0; i < answerArray2.length; i++) {
                if(event.target.innerHTML == word[i]){
              answerArray2.splice(i, 1, word[i]);
                  // console.log("correct")
                  return box.innerHTML=answerArray2.join(" ");

                }
                console.log(i)
                console.log(answerArray)
              }
        })
     }
   }


console.log(answerArray.join(" "));

 if (answerArray == currentWord){
   console("you win");
 };
