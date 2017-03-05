var index = 0;
var pause = false

window.onload = function () {
  'use strict';
    display();
    nextSlide();
    inte;
}


function display() {
    'use strict';
    $.getJSON("https://pajukat1-40fdc.firebaseio.com/.json", function (data) {
        $('#otsikko').html(data.uutiset[index].otsikko);
        $('#päivämäärä').html(data.uutiset[index].päivämäärä);
        $('#sisältö').html(data.uutiset[index].sisältö);
    });
}

function nextSlide() {
    'use strict';
    if (index < 2) {
        index += 1;
    } else {
        index = 0;
    }
    display();
    $("#animated").fadeOut( "slow", function() {display()} );
}

var inte = window.setInterval(function () {nextSlide()}, 3000);
var last = index;

function previousSlide() {
  'use strict';
  if (index > 0) {
    index -= 1
  } else {
    index = 2
  }
  display()
}

function change(button_id) {
    'use strict';
     if (document.getElementById(button_id).textContent == "Pause") {
        document.getElementById(button_id).textContent = "Play";
        } else {
        document.getElementById(button_id).textContent = "Pause";
    }
}

function pauseCarousel() {
    'use strict';
    if (!pause) {
       window.clearInterval(inte);
       pause = true;
    } else {
        inte = setInterval(function() {next()}, 3000);
        pause = false;
    }
};
