export function generateJourneyOptions(route, destinationCode) {

    const destinationIndex = route.findIndex(
        station => station.code === destinationCode
    );

    if (destinationIndex === -1) {
        return [];
    }

    const options = [];

    for (let i = 0; i < destinationIndex; i++) {

        options.push({
            boarding: route[i],
            destination: route[destinationIndex],
            boardingIndex: i,
            destinationIndex
        });

    }

    return options;
}