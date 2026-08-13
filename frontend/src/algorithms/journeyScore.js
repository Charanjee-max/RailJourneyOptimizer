export function calculateJourneyScore(option) {
  let score = 100;

  // Seat changes
  score -= option.seatChanges * 15;

  // Number of tickets
  score -= (option.tickets.length - 1) * 10;

  // Mixed class
  if (option.mixedClass) {
    score -= 20;
  }

  return score;
}