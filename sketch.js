let mill = 0; // Use 'let' for modern JavaScript

// The setup function runs once when the sketch starts
function setup() {
  createCanvas(500, 500); // Creates a 500x500 pixel canvas
}

// The draw function runs continuously in a loop
function draw() {
  background(173, 216, 230); // Light blue background (RGB)

  // Circle with dynamic height
  stroke(73, 71, 83);        // Border color
  strokeWeight(5);           
  fill(142, 111, 82, 150);   // Fill color with transparency
  ellipse(250, 30, 60, mill); // Centered circle that stretches vertically

  // Transparent fill based on mouseX, safely constrained
  fill(133, 120, 177, constrain(mouseX, 0, 255));
  noStroke(); // Removes stroke for cleaner fill

  // Dynamic line that follows mouseY
  strokeWeight(3);
  stroke(241, 117, 88);
  line(50, 150, 400, mouseY);

  // Display pirate cheer text
  textSize(75);
  textFont("Pricedown"); // Make sure this font is loaded in HTML or preload()
  fill(0); // Text color
  text('GO PIRATES', 10, 400);
}

// Called every time the mouse is pressed
function mousePressed() {
  if (mill >= 300) {
    mill = 0;
  } else {
    mill += 10;
  }
}

