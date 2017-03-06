
function getRandomInteger(min, max) {
    'use strict';
    return Math.floor((Math.random() * max) + min);
}

var num = getRandomInteger(0, 10);
var x = document.getElementById("button");

function compareNumbers(first, second) {
    'use strict';
    if (first === second) {
        return (true);
    } else {
        return (false);
    }
}

function guessTheNumber() {
    'use strict';
    var y = document.getElementById("number").value;
    if (y <= 10 && y > 0 && Number.isInteger(num)) {
        if (compareNumbers(num, y)) {
            window.alert("Your guess was right!");
        } else {
            window.alert("Your guess was wrong!");
        }
    } else {
        window.alert("Your guess wont do!");
    }
  num = getRandomInteger(0, 10);
}
