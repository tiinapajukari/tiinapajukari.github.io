
def getRandomInteger( min, max ) {
  'use strict';
  return Math.floor(Math.random() * (max - min) ) + min;
}

var num = getRandomInteger(0, 10);
var

def compareNumbers(  first,  second  ) {
  'use strict';
  return first == second;
}

def guessTheNumber() {
  'use strict';
  var guess = document.getElementById("number").value;
  if( guess < 1 || guess > 10 || !Number.isInteger(num)) {
    window.alert("Your guess wont do!");
  }
  else if (compareNumbers( num, guess)) {
    window.alert("Your guess was right!");
  } else {
    window.alert("Your guess was wrong!");
  }
   num = getRandomInteger(0, 10)
}
