const quotes = [
  "Believe in yourself and all that you are.",
  "Every day is a new beginning.",
  "Push yourself, because no one else will do it for you.",
  "Small steps every day lead to big results.",
  "Your only limit is your mind.",
  "Dream it. Wish it. Do it.",
  "Act like the person you want to become.",
];

function generateQuote() {
  const quoteBox = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[randomIndex];
}
