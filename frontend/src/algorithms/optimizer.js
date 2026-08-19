import { generateJourneyOptions } from "./routeAnalyzer";
import { calculateJourneyDistance } from "./journeyDistance";
import { calculateSeatProbability } from "./seatProbability";
import { calculateScore } from "./scoringEngine";

export function optimizeJourney(route, destinationCode) {

    const options = generateJourneyOptions(route, destinationCode);

    const results = options.map(option => {

        const distance = calculateJourneyDistance(
            option.boardingIndex,
            option.destinationIndex
        );

        const probability = calculateSeatProbability(distance);

        const score = calculateScore(
            distance,
            probability.probability
        );

        return {
            boarding: option.boarding,
            destination: option.destination,
            distance,
            probability: probability.probability,
            level: probability.level,
            score: score.score
        };

    });

    results.sort((a, b) => b.score - a.score);

    return results.slice(0, 5);
}