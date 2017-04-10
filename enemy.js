var enemies = [];

function create() {
  var i = 0
  for( i < 4) {
    var x = Math.floor((Math.random() * 330) + 20);
    var y = Math.floor((Math.random() * 330) + 20);
    var h = Math.floor((Math.random() * 330) + 20);
    var w = Math.floor((Math.random() * 330) + 20);
    var enemy = {x, y, h, w};
    enemies.push(enemy);
    i = i + 1;
  }};

  function drawE(con) {
    $.each(enemies, function(index, enemy) {
    con.fillStyle = '#00FF00';
    con.fillRect(
      enemy.x,
      enemy.y,
      enemy.h,
      enemy.w);
  )};

  function drawEnemies() {
    $.each(enemies, function(index, enemy) {
      context.drawImage(

        /**kuvanimi,
        spritew,
        spriteh,
        spite kuinka iso w,
        spite kuinka iso h,
        koordinaatit,**/
      )
    })
  }

function move() {

};
