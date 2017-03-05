
def getRandomInteger( min, max ) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var num = 0
window.onload = function(num = getRandomInteger(1, 10))

def compareNumbers(  first,  second  ) {
  return first === second;
}

def guessTheNumber() {
  var guess = window.propmt("Guess the number!", "Enter a number betbeen 1 and 10")
  if( guess < 1 || guess > 10) {
    window.alert("Your guess wont do!")
    break
  }
  if (compareNumbers( num, guess)) {
    window.alert("Your guess was right!")
  } else {
    window.alert("Your guess was wrong!")
  }
}
