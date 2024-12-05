// TO DO: ADD MEDIA SUCH AS SOUND ADD IMAGE BACKGROUND





let items = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    items.push(new Item(random(width), random(height)));
  }
}

function draw() {
  background(220);
  for (let item of items) {
    item.display();
  }
  fill(0);
  textSize(20);
  text('Score: ' + score, 10, 30);
}

function mousePressed() {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].isClicked(mouseX, mouseY)) {
      score++;
      items.splice(i, 1);
    }
  }
}

class Item {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.size / 2;
  }
}
