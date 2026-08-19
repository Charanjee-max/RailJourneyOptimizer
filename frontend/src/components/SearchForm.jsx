import { useState } from "react";
import { createJourneyRequest } from "../services/journeyService";

function SearchForm() {

    const [trainNumber, setTrainNumber] = useState("");
    const [boardingStation, setBoardingStation] = useState("");
    const [destinationStation, setDestinationStation] = useState("");
    const [journeyDate, setJourneyDate] = useState("");
    const [travelClass, setTravelClass] = useState("2A");
    const [allowMixedClass, setAllowMixedClass] = useState(false);

    function handleAnalyze() {

        if (trainNumber.trim() === "") {
            alert("Please enter Train Number");
            return;
        }

        if (!/^\d+$/.test(trainNumber)) {
            alert("Train Number must contain only numbers");
            return;
        }

        if (boardingStation.trim() === "") {
            alert("Please enter Boarding Station");
            return;
        }

        if (destinationStation.trim() === "") {
            alert("Please enter Destination Station");
            return;
        }

        if (boardingStation.toUpperCase() === destinationStation.toUpperCase()) {
            alert("Boarding and Destination stations cannot be the same");
            return;
        }

        if (journeyDate === "") {
            alert("Please select Journey Date");
            return;
        }

        const journeyRequest = createJourneyRequest({
            trainNumber,
            boardingStation,
            destinationStation,
            journeyDate,
            travelClass,
            allowMixedClass
        });

        console.log("========== Journey Request ==========");
        console.table(journeyRequest);
        console.log("=====================================");
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

            <input
                type="text"
                placeholder="Boarding Station"
                value={boardingStation}
                onChange={(e) => setBoardingStation(e.target.value)}
            />

            <input
                type="text"
                placeholder="Destination Station"
                value={destinationStation}
                onChange={(e) => setDestinationStation(e.target.value)}
            />

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

            <button onClick={handleAnalyze}>
                Analyze Journey
            </button>

        </div>
    );
}

export default SearchForm;