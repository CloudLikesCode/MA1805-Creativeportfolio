
// CREATES THE CANVAS //

function setup() {
  createCanvas(400, 400);
}


// N CIRCLE IS BLUE, N=1 IS YELLOW, PROGRESSIVELY GETTING SMALLER // 

function draw() {
  background(255, 0, 0,);
  fill(0, 0, 255)
  ellipse(200, 200, 400, 400);
  fill(255, 255, 0)
  ellipse(200, 200, 300, 300)
  fill(0, 0, 255)
  ellipse(200, 200, 200, 200);
  fill(255, 255, 0)
  ellipse(200, 200, 100, 100)
  fill(0, 0, 255)
  ellipse(200, 200, 50, 50);
}