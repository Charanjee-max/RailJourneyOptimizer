import { useState } from "react";
import { createJourneyRequest } from "../services/journeyService";
import { getTrainSchedule } from "../services/backendApi";

function SearchForm() {
    const [trainNumber, setTrainNumber] = useState("");
    const [boardingStation, setBoardingStation] = useState("");
    const [destinationStation, setDestinationStation] = useState("");
    const [journeyDate, setJourneyDate] = useState("");
    const [travelClass, setTravelClass] = useState("2A");
    const [allowMixedClass, setAllowMixedClass] = useState(false);

    const [trainRoute, setTrainRoute] = useState([]);
    const [trainName, setTrainName] = useState("");

    async function handleAnalyze() {

        if (trainNumber.trim() === "") {
            alert("Please enter Train Number");
            return;
        }

        if (!/^\d+$/.test(trainNumber)) {
            alert("Train Number must contain only numbers");
            return;
        }

        try {

            const train = await getTrainSchedule(trainNumber);

            setTrainName(train.trainName);
            setTrainRoute(train.route);

            if (train.route.length > 0) {
                setBoardingStation(train.route[0].code);
                setDestinationStation(train.route[train.route.length - 1].code);
            }

            console.log("========== Journey Request ==========");

            const journeyRequest = createJourneyRequest({
                trainNumber,
                boardingStation,
                destinationStation,
                journeyDate,
                travelClass,
                allowMixedClass
            });

            console.table(journeyRequest);

            console.log("========== Train Details ==========");
            console.log(train);

            console.log("========== Train Route ==========");
            console.table(train.route);

        } catch (error) {

            console.error(error);
            alert("Unable to fetch train details.");

        }
    }

    return (
        <div className="search-card">

            <h1>Emergency Railway Journey Assistant</h1>

            <p>Search journey after chart preparation</p>

            <input
                type="text"
                placeholder="Train Number"
                value={trainNumber}
                onChange={(e) => setTrainNumber(e.target.value)}
            />

            <button onClick={handleAnalyze}>
                Analyze Journey
            </button>

            {trainName && (
                <h3 style={{ marginTop: "20px" }}>
                    {trainName}
                </h3>
            )}

            {trainRoute.length > 0 && (
                <>

                    <select
                        value={boardingStation}
                        onChange={(e) => setBoardingStation(e.target.value)}
                    >
                        {trainRoute.map((station) => (
                            <option
                                key={station.sequence}
                                value={station.code}
                            >
                                {station.code} - {station.name}
                            </option>
                        ))}
                    </select>

                    <select
                        value={destinationStation}
                        onChange={(e) => setDestinationStation(e.target.value)}
                    >
                        {trainRoute.map((station) => (
                            <option
                                key={station.sequence}
                                value={station.code}
                            >
                                {station.code} - {station.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="date"
                        value={journeyDate}
                        onChange={(e) => setJourneyDate(e.target.value)}
                    />

                    <select
                        value={travelClass}
                        onChange={(e) => setTravelClass(e.target.value)}
                    >
                        <option value="2A">2A</option>
                        <option value="3A">3A</option>
                        <option value="SL">SL</option>
                    </select>

                    <div className="checkbox">

                        <input
                            type="checkbox"
                            checked={allowMixedClass}
                            onChange={(e) => setAllowMixedClass(e.target.checked)}
                        />

                        <label>Allow Mixed Class</label>

                    </div>

                </>
            )}

        </div>
    );
}

export default SearchForm;