// TRY ADDING MOVING PIXELS WHEN THEY COLLIDE THEY CHANGE TO A RANDOM COLOUR 

// TO DO: ADD TOUCHING RECT EXAMPLE FROM NOTION INTO THIS SKETCH url: https://www.notion.so/anthillsocial/05-Collisions-a30d7121a82249e99baf344412d952d0


let myFill = 255;
let w = 100;
let h = 50;
let x = 200; 
let y = 200; 
let count = 0;



function setup() {
  // Create a 400x400 pixel canvas
  createCanvas(400, 400);
  
  // No outline for shapes
  
}

function draw(){
  background(100); // Make background grey
  noStroke();
  
  // Loop to create pixelated squares
  for (let x = 0; x < width; x += 20) { // Move in steps of 20 pixels
    for (let y = 0; y < height; y += 20) { // Move in steps of 20 pixels
      // Generate a random color
      fill(random(255), random(255), random(255));
      
      // Draw a square at the current position
      rect(x, y, 20, 20); // Draw a 20x20 square
    }
  }
  
  fill(myFill);
  rect(x, y, w, h); // x, y, size

  if(mouseX > x && mouseX < x+w && mouseY > y && mouseY < y + h){
    myFill = [255, 0, 0];
    count++;
  }else{
    myFill = 255;
  }

  fill(0)
  textSize(20);
  text(count, x+20, y+30)
}
