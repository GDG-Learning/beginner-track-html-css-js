function startTest() {
  let score = 0;

  // Question 1: Sleep hours
  let sleep = Number(prompt("How many hours do you sleep per day?"));
  if (sleep >= 4) {
    score++;
  }

  // Question 2: Music
  let music = prompt("Do you enjoy music? (yes/no)").toLowerCase();
  if (music === "yes") {
    score++;
  }

  // Question 3: Simple math check
  let math = Number(prompt("What is 2 + 2?"));
  if (math === 4) {
    score++;
  }

  // Question 4: Tiredness
  let tired = prompt("Do you get tired? (yes/no)").toLowerCase();
  if (tired === "yes") {
    score++;
  }

  // Final decision
  if (score >= 3) {
    alert("✅ You are definitely human!");
  } else if (score >= 1) {
    alert("🤖 Half human, half robot!");
  } else {
    alert("⚠️ Robot detected!");
  }
}
