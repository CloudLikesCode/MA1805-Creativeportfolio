let i = 0;

// Text obtained from  UK Government website 
const housingText = "A robot may not injure a human being or, through inaction, allow a human being to come to harm. A robot must obey orders given it by human beings except where such orders would conflict with the First Law. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.";
const textArray = housingText.split(" "); // Convert the text into an an array (list) of words. 


function setup(){
	createCanvas(500, 500); 
  frameRate(2); // speed of the sketch 
}

function draw(){
  let x = random(width)
  let y = random(height);

  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(0);
    stroke(100);
    console.log(i);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0; // reset the counter
    background(255); // clear the background
  }

}