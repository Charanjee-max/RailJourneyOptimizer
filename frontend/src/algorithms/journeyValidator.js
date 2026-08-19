export function validateJourney(route, boarding, destination) {

    const boardingIndex = route.findIndex(
        station => station.code === boarding
    );

    const destinationIndex = route.findIndex(
        station => station.code === destination
    );

    if (boardingIndex === -1 || destinationIndex === -1) {
        return {
            valid: false,
            message: "Station not found."
        };
    }

    if (boardingIndex >= destinationIndex) {
        return {
            valid: false,
            message: "Destination must come after Boarding Station."
        };
    }

    return {
        valid: true,
        boardingIndex,
        destinationIndex
    };

}