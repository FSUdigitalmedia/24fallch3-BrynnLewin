let x1 = 100;     // x position of the ball
let y1 = 60;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball
//second shape
let x2 = 50;     // x position of the ball
let y2 = 90;       // y position of the ball
let x2Speed = 3;  // speed in X direction
let y2Speed = 7; // speed in Y direction
let d2 = 20;      // diameter of the ball
//third ball
let x3 = 100;
let y3 = 100;
let x3Speed = 3;
let y3Speed = 7;
let d3 = 20;


function setup() {
  createCanvas(400, 400);
}



function draw() {
  background(244,25); // try commenting this out!

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?

  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;
  }
  y1 = y1 + y1Speed;
  fill(random(255))
  circle(x1, y1, d1);
  
  // second shape 
  
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;
  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?

  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;
  }
  y2 = y2 + y2Speed;

  circle(y1, y2, d2);

  //third shape
  if (x3 > width || x3 < 0) {
    x3Speed = x3Speed * -1;
  }
  x3 = x3 + x3Speed; // adding a negative xSpeed *decreases* x, right?

  // same as above, but for the top and bottom of the canvas
  if (y3 > width || y3 < 0) {
    y3Speed = y3Speed * -1;
  }
  y3 = y3 + y3Speed;
  fill(random(255),random(255),random(255))
  rect(mouseX,mouseY,d3)

}
