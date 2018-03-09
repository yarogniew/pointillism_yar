var img;
var song;
var smallPoint, largePoint;

function preload() {
  img = loadImage("Jaga_tan3.png");
  song = loadSound('Potrzeby.mp3');
}

function setup() {

  song.play();
  createCanvas(420, 578);
  smallPoint = 4;
  largePoint = 20;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {

  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
