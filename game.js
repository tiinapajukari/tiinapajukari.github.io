$(document).ready( function() {

  //disable scrolling with arrow keys
  window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

// Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 512;
  canvas.height = 480;
  document.body.appendChild(canvas);

  // Background image
  var bgImage = new Image();
  bgImage.src = "assets/background.png";
  var playerImage = new Image();
  playerImage.src = "assets/player3.png";
  var enemyImage = new Image();
  enemyImage.src = "assets/enemy3.png";

  // sprite animation
  function sprite (options) {
		var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
  }

  var playerP = sprite({
    context: ctx,
    width: playerImage.width,
    height: playerImage.height,
    image: playerImage
  });

 // Game objects
  var player = {
  	speed: 10, // movement in pixels per second
  	x: canvas.width/2,
  	y: canvas.height/2,
    w: playerImage.width,
    h: playerImage.height,
  };
/**
  var sx = 0; // prite source x
  var sy = 0;
  var sw = 16; //leveys
  var sh = 30;
  **/
  var enemies = [];

function createE() {
  while (enemies.length < 5) {
    var dire = Math.floor((Math.random() * 4));
    var enemy = {
      dir: dire,
      x: 32 + (Math.random() * (canvas.width - 64)),
      y: 32 + (Math.random() * (canvas.height - 64)),
      speed: 2
    };
    enemies.push(enemy);
  };
}
  createE();

  var keysDown = {};

  function moveP(direction) {
    switch (direction) {
      case "left":
        player.x -= player.speed;
        if (player.x < 20) {
          player.x = 20;
          sx = 16;
          sy = 30;
        }
        break;
      case "right":
        player.x += player.speed;
        if (player.x > 490) {
          player.x = 490;
          sx = 16;
          sy = 90;
        }
        break;
      case "up":
        player.y -= player.speed;
        if (player.y < 20) {
          player.y = 20;
          sx = 16;
          sy = 60;
        }
        break;
      case "down":
        player.y += player.speed;
        if (player.y > 440) {
          player.y = 440;
          sx = 16;
          sy = 0;
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

  function update() {
    if (38 in keysDown) {
      moveP('up');
    }
    if (40 in keysDown) {
      moveP('down');
    }
    if (37 in keysDown) {
      moveP('left');
    }
    if (39 in keysDown) {
      moveP('right');
    }

    //move enemies
    moveE();

    // did you catch a enemy?
    for(i = 0; i < enemies.length; i++) {
      if (
        player.x <= (enemies[i].x + 32) && enemies[i].x <= (player.x + 32) && player.y <= (enemies[i].y + 32) && enemies[i].y <= (player.y + 32)) {
        ++enemiesCaught;
        reset();
      };
    };
  };

  function moveE() {
    for(i = 0; i < enemies.length; i++) {
    // left
    if (enemies[i].dir === 0 ) {
      enemies[i].x -= enemies[i].speed;
      if (enemies[i].x < 16) {
        enemies[i].x = 16;
        //change direction
        enemies[i].dir = 1;
      };
    };
    //right
    if (enemies[i].dir == 1) {
      enemies[i].x += enemies[i].speed;
      if (enemies[i].x > 500) {
         enemies[i].x = 500;
         //change direction
         enemies[i].dir = 0;
      };
    };
    //up
    if (enemies[i].dir == 2) {
      enemies[i].y += enemies[i].speed;
      if (enemies[i].y > 460) {
        enemies[i].y = 460;
        //change direction
        enemies[i].dir = 3;
      };
    };
    //down
    if (enemies[i].dir == 3) {
      enemies[i].y -= enemies[i].speed;
      if (enemies[i].y < 30) {
         enemies[i].y = 30;
         //change direction
         enemies[i].dir = 2;
      };
    };
  };
  };

  // Reset the game when the player catches a monster
  var reset = function () {
  	player.x = canvas.width / 2;
  	player.y = canvas.height / 2;

  	// Throw the monster somewhere on the screen randomly
    for(i = 0; i < enemies.length; i++) {
  	enemies[i].x = 32 + (Math.random() * (canvas.width - 64));
  	enemies[i].y = 32 + (Math.random() * (canvas.height - 64));
    };
};

  var enemiesCaught = 0;


  // Draw everything
var render = function () {
		ctx.drawImage(bgImage, 0, 0);
		//ctx.drawImage(playerImage, player.x, player.y);
    //context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, player.x, player.y)
    for (i = 0; i < enemies.length; i++) {
		ctx.drawImage(enemyImage,enemies[i].x, enemies[i].y);

    	// Score
    	ctx.fillStyle = "rgb(250, 250, 250)";
    	ctx.font = "20px Arial";
    	ctx.textAlign = "left";
    	ctx.textBaseline = "top";
    	ctx.fillText("Enemys caught: " + enemiesCaught, 32, 32);
  };
	};


// The main game loop
var main = function () {
	update();
	render();

	// Request to do this again ASAP
	requestAnimationFrame(main);
  };

 main();
});
