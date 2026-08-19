export function calculateSeatProbability(distance) {

    let probability;

    if (distance <= 5) {
        probability = 95;
    } else if (distance <= 10) {
        probability = 90;
    } else if (distance <= 20) {
        probability = 80;
    } else if (distance <= 40) {
        probability = 65;
    } else if (distance <= 60) {
        probability = 50;
    } else {
        probability = 30;
    }

    return {
        probability,
        level:
            probability >= 80
                ? "High"
                : probability >= 60
                ? "Medium"
                : "Low"
    };
}