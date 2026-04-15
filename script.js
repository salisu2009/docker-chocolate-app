const facts = [
  "Chocolate melts at just below human body temperature — that's why it melts in your mouth!",
  "The smell of chocolate increases theta brain waves, which trigger relaxation.",
  "The first chocolate bar was made in 1847 by Joseph Fry.",
  "Cacao farmers typically earn less than $2 a day.",
  "Dark chocolate contains more cocoa and less sugar than milk chocolate.",
  "Europeans account for nearly half of all chocolate consumed worldwide.",
  "It takes 2–4 days to make a single-origin chocolate bar.",
  "White chocolate isn't technically chocolate — it contains no cocoa solids."
];

document.getElementById("fact-btn").addEventListener("click", () => {
  const el = document.getElementById("random-fact");
  el.textContent = "🍫 " + facts[Math.floor(Math.random() * facts.length)];
});
