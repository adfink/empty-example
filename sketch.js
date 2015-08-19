var y = 400;
var y2 = 0;
var x = 400;
var x2 = 0

function setup() {
  createCanvas(720, 400);
  stroke(255);
  frameRate(30);
}

function draw() {
  background(0);
  y = y - 1;
  if (y < 0) {
    y = height;
  }

  for ( var i = 0; i < 401; i+=25) {
    line(i, y, 200, 0);
  }

  y2 = y2 +1;
  if (y2 > height) {
    y2 = 0;
  }

  for (var i = 0; i < 401; i+=25) {
    line(i, y2, 200, height);  
  }

  x = x-1;
  if (x < 0) {
    x = 400;
  }

  for ( var i = 0; i < 401; i+=25) {
    line(0, 200, x, i);
  }

  x2 = x2 +1
  if (x2 > 400) {
    x2 = 0;
  }

  for (var i = 0; i < 401; i+=25) {
    line(400, 200, i, x2);
  }
  
for (var i = 0; i < 401; i+=25) {
    line(400, 200, x2, i);
  }


}