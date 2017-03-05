
window.onload = function () {
    $.getJSON("https://pajukat1-40fdc.firebaseio.com/.json", function (data) {
        console.log(data);
    });
}
