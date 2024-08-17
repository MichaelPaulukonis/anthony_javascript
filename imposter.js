let suspects = ["Alice", "Bob", "Charlie", "David", "Eve"];
let imposter;
let round = 0;
let statements = [
  ["I was in the library all day!", "I was at the gym.", "I was working on my project.", "I was taking a nap.", "I was out shopping."],
  ["I saw someone suspicious near the crime scene.", "I heard a loud noise around the time of the murder.", "I didn't see or hear anything unusual.", "I was with a friend, we have an alibi.", "I was at home alone."],
  ["I found a strange object near the body.", "I noticed some footprints leading away from the scene.", "I don't have any information to share.", "I saw someone running away.", "I was too far away to see anything."]
];

function setup() {
  createCanvas(400, 400);
  imposter = floor(random(suspects.length));
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(220);
  
  if (suspects.length === 1) {
    text("VICTORY! The imposter was " + suspects[0] + ".", width/2, height/2);
    return;
  }
  
  text("1 person died. Who is the imposter?", width/2, 50);
  
  for (let i = 0; i < suspects.length; i++) {
    text(suspects[i] + ": " + statements[round][i], width/2, 100 + i * 50);
  }
}

function mousePressed() {
  let choice = floor(map(mouseY, 100, 350, 0, suspects.length));
  
  if (choice === imposter) {
    suspects.splice(choice, 1);
    round++;
    playSound("ding.mp3");
  } else {
    suspects.splice(choice, 1);
    if (suspects.includes(imposter)) {
      playSound("buzzer.mp3");
    } else {
      text("GAME OVER", width/2, height/2);
      noLoop();
    }
  }
}

function playSound(file) {
  // Load and play the sound file
}