let playerX, playerY, initialEmojiSize, displaySize;
let foodX, foodY;
let windowWidth = 800;
let windowHeight = 600;
let overallScore = 0; // New variable to keep track of the overall score

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width / 2;
  playerY = height / 2;
  initialEmojiSize = 25;
  displaySize = initialEmojiSize;
  playerSize = initialEmojiSize;
  resetFood();
  textSize(36);
  textAlign(CENTER, CENTER); // Center align text
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER); // Center align text

  // Move the player
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    playerY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += 5;
  }

  // Check for collision with food
  let distance = dist(playerX, playerY, foodX, foodY);
  if (distance <= displaySize + 10) {
    playerSize += 5;
    overallScore += 5; // Increment the overall score
    resetFood();
  }

  // Update display size based on score
  if (playerSize % 100 === 0) {
    displaySize = initialEmojiSize;
		playerSize = initialEmojiSize;
  } else {
    displaySize = playerSize;
  }

  // Draw the player
  fill(0); // Set the fill color to black
  // circle(playerX, playerY, displaySize);

  // Draw the emoji in front of the player
  push();
  translate(playerX, playerY);
  textSize(displaySize);
  fill(255); // Set the fill color to white for the emoji
  text("😈", 0, 0); // Draw emoji at (0, 0) since it's centered
  pop();

  // Draw the food
  fill(255);
  // circle(foodX, foodY, 20);
  fill(0);
  text("🤩", foodX - 10, foodY + 5);

	displayScore()
}

function displayScore() {
	textAlign(LEFT);
	  // Draw the player size and overall score
  fill(255);
  // text(`Size: ${playerSize}`, 10, 30);
  text(`Score: ${overallScore}`, 10, 60);
}

function resetFood() {
  foodX = random(10, windowWidth - 10);
  foodY = random(10, windowHeight - 10);
}
