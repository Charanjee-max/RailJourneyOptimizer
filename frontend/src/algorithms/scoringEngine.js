export function calculateScore({
    distance,
    probability,
    boardingStation,
    trainType = ""
}) {

    // 40 Marks
    const probabilityScore = probability * 0.40;

    // 25 Marks
    let distanceScore = 0;

    if (distance <= 5) distanceScore = 25;
    else if (distance <= 10) distanceScore = 22;
    else if (distance <= 20) distanceScore = 18;
    else if (distance <= 40) distanceScore = 14;
    else if (distance <= 60) distanceScore = 10;
    else distanceScore = 5;

    // 15 Marks
    const majorStations = [
        "NDLS",
        "BPL",
        "INDB",
        "UJN",
        "GWL",
        "AGC",
        "MTJ",
        "JAT"
    ];

    const junctionScore =
        majorStations.includes(boardingStation)
            ? 15
            : 6;

    // 10 Marks
    let trainTypeScore = 0;

    if (
        trainType.toLowerCase().includes("rajdhani") ||
        trainType.toLowerCase().includes("shatabdi") ||
        trainType.toLowerCase().includes("vande")
    ) {

        trainTypeScore = 10;

    } else {

        trainTypeScore = 5;

    }

    // Reserved for future features
    const futureScore = 10;

    const totalScore = Math.round(
        probabilityScore +
        distanceScore +
        junctionScore +
        trainTypeScore +
        futureScore
    );

    return {

        score: totalScore,

        breakdown: {

            probability: Math.round(probabilityScore),

            distance: distanceScore,

            junction: junctionScore,

            trainType: trainTypeScore,

            future: futureScore

        }

    };

}