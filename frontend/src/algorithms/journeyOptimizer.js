import { calculateJourneyScore } from "./journeyScore";

export function optimizeJourney(route, vacantBerths, request) {

    const options = [];

    for (const berth of vacantBerths) {

        if (
            berth.fromStation === request.boardingStation &&
            berth.toStation === request.destinationStation
        ) {

            const option = {
                tickets: [berth],
                seatChanges: 0,
                mixedClass: false
            };

            option.journeyScore = calculateJourneyScore(option);

            options.push(option);
        }
    }

    options.sort((a, b) => b.journeyScore - a.journeyScore);

    return options;
}