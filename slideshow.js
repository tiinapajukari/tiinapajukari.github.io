var index = 1

window.onload = function () {
  'use strict';
    $.getJSON("https://pajukat1-40fdc.firebaseio.com/.json", function (data) {
        //console.log(data);
        $('#otsikko').hmtl(data).uutiset[index].otsikko)});
}

function display() {
    'use strict';
    $.getJSON("https://pajukat1-40fdc.firebaseio.com/.json", function (data) {
        $('#otsikko').html(data.uutiset[index].otsikko);
        $('#paivamaara').html(data.uutiset[index].paivamaara);
        $('#sisalto').html(data.uutiset[index].sisalto);
    });
}

function switchA() {
    'use strict';
    setInterval(function () {
        nextSlide();
    }, 3000);
}

function nextSlide() {
    'use strict';
    if (index < 2) {
        index += 1;
        display();
    } else {
        index = 0;
        display();
    }
}
