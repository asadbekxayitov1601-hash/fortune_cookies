export const fortunes = [
  "The mind is everything. What you think you become.",
  "Diligence is the mother of good luck.",
  "Your road to glory will be rocky, but fulfilling.",
  "A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A hunch is creativity trying to tell you something.",
  "A person is never too old to learn.",
  "A smooth sea never made a skilled mariner.",
  "Accept something that you cannot change, and you will feel better.",
  "Adventure can be real happiness.",
  "All your hard work will soon pay off.",
  "An acquaintance of the past will affect your future."
];

export const generateLuckyNumbers = () => {
  const count = Math.floor(Math.random() * 4) + 3; // 3 to 6 numbers
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * 99) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

export const getRandomFortune = () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return {
    quote: fortunes[randomIndex],
    luckyNumbers: generateLuckyNumbers()
  };
};
