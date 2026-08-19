const axios = require("axios");
const { BASE_URL, API_KEY } = require("../config/railRadarConfig");

async function getTrainSchedule(trainNumber) {
    try {
        const response = await axios.get(
            `${BASE_URL}/trains/${trainNumber}?haltsOnly=true`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        );

        return response.data;

    } catch (error) {

        console.error("RailRadar Error:", error.response?.data || error.message);

        throw error;
    }
}

module.exports = {
    getTrainSchedule
};