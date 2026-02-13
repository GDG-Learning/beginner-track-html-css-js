function checkBudget() {
  // Ask the user for inputs
  let budget = Number(prompt("Enter your budget amount:"));
  let price = Number(prompt("Enter the item price:"));
  let savings = Number(prompt("Enter your savings (optional, press Cancel if none):")) || 0;

  // Calculate available funds
  let available = budget + savings;

  // Decision logic
  if (available >= price) {
    alert("✅ You can afford this item! Available funds: $" + available);
  } else {
    alert("❌ You cannot afford this item. Available funds: $" + available + ", Item price: $" + price);
  }
}
