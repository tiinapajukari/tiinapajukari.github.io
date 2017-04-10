var player = {
  x: 200,
  y: 200,
  w: 40,
  h: 40,
  speed: 10
};

function drawP(con) {
  var x = player.x - (player.w / 2);
  var y = player.y - (player.h / 2);
  con.fillStyle = '#00FF';
  con.fillRect(
    x,
    y,
    player.w,
    player.h);
};

var keysDown = {};

function moveP(direction) {
  switch (direction) {
    case "left":
      player.x -= player.speed
      if (player.x < 20) {
        player.x = 20;
      }
      break;
    case "right":
      player.x += player.speed
      if (player.x > 330) {
        player.x = 330
      }
      break;
    case "up":
      player.y -= player.speed
      if (player.y < 20) {
        player.y = 20
      }
      break;
    case "down":
      player.y += player.speed
      if (player.y > 330) {
        player.y = 330
      }
      break;
  }
};


window.addEventListener('keydown', function(e) {
  keysDown[e.keyCode] = true;
});

window.addEventListener('keyup', function(e) {
  delete keysDown[e.keyCode];
});

function updateP() {
  if (38 in keysDown) {
    moveP('up')
  }
  if (40 in keysDown) {
    moveP('down')
  }
  if (37 in keysDown) {
    moveP('left')
  }
  if (39 in keysDown) {
    moveP('right')
  }
};

function changeSpeed() {

};

function reset() {

};
