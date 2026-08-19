export function calculateScore(distance, seatProbability) {

    // Probability contributes up to 70 points
    const probabilityScore = (seatProbability / 100) * 70;

    // Shorter journeys get more bonus points (maximum 30)
    let distanceScore = 0;

    if (distance <= 5) {
        distanceScore = 30;
    } else if (distance <= 10) {
        distanceScore = 25;
    } else if (distance <= 20) {
        distanceScore = 20;
    } else if (distance <= 40) {
        distanceScore = 15;
    } else if (distance <= 60) {
        distanceScore = 10;
    } else {
        distanceScore = 5;
    }

    const totalScore = Math.round(probabilityScore + distanceScore);

    return {
        score: totalScore,
        probabilityScore: Math.round(probabilityScore),
        distanceScore
    };
}