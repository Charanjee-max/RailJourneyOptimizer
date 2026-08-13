import { calculateJourneyScore } from "./journeyScore";

export function optimizeJourney(route, vacantBerths, request) {

    const options = [];

    // Direct Journey
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

    // Two Ticket Journey
    for (const first of vacantBerths) {

        if (first.fromStation !== request.boardingStation) continue;

        for (const second of vacantBerths) {

            if (
                first.toStation === second.fromStation &&
                second.toStation === request.destinationStation
            ) {

                const option = {
                    tickets: [first, second],
                    seatChanges:
                        first.coach === second.coach ? 1 : 2,
                    mixedClass: false
                };

                option.journeyScore =
                    calculateJourneyScore(option);

                options.push(option);
            }
        }
    }

    options.sort((a, b) => b.journeyScore - a.journeyScore);

    return options.slice(0, 2);
}