let brushColor;
let brushSize;

function setup() {
  createCanvas(500, 500);
  background(255);
  brushColor = color(0);
  brushSize = 10;
}

function draw() {
  if (mouseIsPressed) {
    // Change brush color based on mouse position
    brushColor = color(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 150);
    
    // Change brush size based on mouse position
    brushSize = map(mouseY, 0, height, 5, 50);
    
    fill(brushColor);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
}