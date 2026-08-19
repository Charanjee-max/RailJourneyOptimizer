import { useState } from "react";
import { createJourneyRequest } from "../services/journeyService";
import { getTrainSchedule } from "../services/backendApi";
import { validateJourney } from "../algorithms/journeyValidator";
import { calculateJourneyDistance } from "../algorithms/journeyDistance";
import { calculateSeatProbability } from "../algorithms/seatProbability";
import { getRecommendation } from "../algorithms/recommendationEngine";
import { optimizeJourney } from "../algorithms/optimizer";

import TrainInfo from "./TrainInfo";
import StationDropdown from "./StationDropdown";
import ResultCard from "./ResultCard";

function SearchForm() {

    const [trainNumber, setTrainNumber] = useState("");
    const [boardingStation, setBoardingStation] = useState("");
    const [destinationStation, setDestinationStation] = useState("");
    const [journeyDate, setJourneyDate] = useState("");
    const [travelClass, setTravelClass] = useState("2A");
    const [allowMixedClass, setAllowMixedClass] = useState(false);

    const [train, setTrain] = useState(null);
    const [trainRoute, setTrainRoute] = useState([]);

    const [result, setResult] = useState(null);

    async function handleAnalyze() {

        if (!trainNumber.trim()) {
            alert("Please enter Train Number");
            return;
        }

        try {

            const trainData = await getTrainSchedule(trainNumber);

            setTrain(trainData);
            setTrainRoute(trainData.route);

            if (trainData.route.length > 0) {

                setBoardingStation(trainData.route[0].code);

                setDestinationStation(
                    trainData.route[trainData.route.length - 1].code
                );

            }

        } catch (error) {

            console.error(error);
            alert("Unable to fetch train details.");

        }

    }

    function handleFindJourney() {

        if (!journeyDate) {

            alert("Please select Journey Date");
            return;

        }

        const validation = validateJourney(
            trainRoute,
            boardingStation,
            destinationStation
        );

        if (!validation.valid) {

            alert(validation.message);
            return;

        }

        const distance = calculateJourneyDistance(
            validation.boardingIndex,
            validation.destinationIndex
        );

        const probability = calculateSeatProbability(distance);

        const recommendation = getRecommendation(
            probability.probability
        );

        const topRecommendations = optimizeJourney(
            trainRoute,
            destinationStation,
            train
        );

        createJourneyRequest({
            trainNumber,
            boardingStation,
            destinationStation,
            journeyDate,
            travelClass,
            allowMixedClass
        });

        setResult({
            distance,
            probability: probability.probability,
            level: probability.level,
            recommendation,
            topRecommendations
        });

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
                Load Train
            </button>

            <TrainInfo train={train} />

            {trainRoute.length > 0 && (

                <>

                    <StationDropdown
                        label="Boarding Station"
                        value={boardingStation}
                        stations={trainRoute}
                        onChange={setBoardingStation}
                    />

                    <StationDropdown
                        label="Destination Station"
                        value={destinationStation}
                        stations={trainRoute}
                        onChange={setDestinationStation}
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

                    <button onClick={handleFindJourney}>
                        Find Best Journey
                    </button>

                </>

            )}

            <ResultCard result={result} />

        </div>

    );

}

export default SearchForm;