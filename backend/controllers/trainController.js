const railRadarService = require("../services/railRadarService");

async function getTrainSchedule(req, res) {

    try {

        const { number } = req.params;

        console.log("Fetching Train:", number);

        const result = await railRadarService.getTrainSchedule(number);

        const train = result.data.train;

        const route = result.data.route.map(stop => ({
            sequence: stop.sequence,
            code: stop.station.code,
            name: stop.station.name,
            arrival: stop.arrival || "Source",
            departure: stop.departure || "Destination",
            platform: stop.platform || "-"
        }));

        res.json({
            success: true,
            trainNumber: train.number,
            trainName: train.name,
            source: train.source,
            destination: train.destination,
            route
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch train schedule."
        });

    }

}

module.exports = {
    getTrainSchedule
};