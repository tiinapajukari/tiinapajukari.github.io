$(document).ready( function() {
  var canvas = document.getElementById("gcanvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 350;
  canvas.height = 350;
  document.body.appendChild(canvas);

  var bgImage = new Image();
  ctx.drawImage(bgImage, 350, 350);
  bgImage.src ="assets/tausta.png";
  create();

function render() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 350, 350);
  drawP(ctx);
  drawE(ctx);
};

function main() {
  updateP();
  render();
  requestAnimationFrame(main);
}

  main();
});
