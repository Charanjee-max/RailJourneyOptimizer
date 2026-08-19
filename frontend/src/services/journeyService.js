export function createJourneyRequest(data) {

    return {
        trainNumber: data.trainNumber,
        boardingStation: data.boardingStation.toUpperCase(),
        destinationStation: data.destinationStation.toUpperCase(),
        journeyDate: data.journeyDate,
        travelClass: data.travelClass,
        allowMixedClass: data.allowMixedClass
    };

}