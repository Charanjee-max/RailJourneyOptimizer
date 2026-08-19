import { calculateJourneyDistance } from "./journeyDistance";
import { calculateSeatProbability } from "./seatProbability";

export function findBestBoarding(route, destinationCode) {

    const destinationIndex = route.findIndex(
        station => station.code === destinationCode
    );

    if (destinationIndex === -1) {
        return null;
    }

    let bestOption = null;

    for (let i = 0; i < destinationIndex; i++) {

        const distance = calculateJourneyDistance(i, destinationIndex);

        const probability = calculateSeatProbability(distance);

        if (
            !bestOption ||
            probability.probability > bestOption.probability
        ) {

            bestOption = {
                station: route[i],
                distance,
                probability: probability.probability,
                level: probability.level
            };

        }

    }

    return bestOption;
}