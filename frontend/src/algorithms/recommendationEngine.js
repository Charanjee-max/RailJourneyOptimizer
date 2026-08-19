export function getRecommendation(probability) {

    if (probability >= 90) {
        return {
            stars: "⭐⭐⭐⭐⭐",
            title: "Excellent Choice",
            message: "Proceed with this journey."
        };
    }

    if (probability >= 75) {
        return {
            stars: "⭐⭐⭐⭐☆",
            title: "Very Good Choice",
            message: "High chance of getting a seat."
        };
    }

    if (probability >= 60) {
        return {
            stars: "⭐⭐⭐☆☆",
            title: "Good Choice",
            message: "Reasonable chance of getting a seat."
        };
    }

    if (probability >= 40) {
        return {
            stars: "⭐⭐☆☆☆",
            title: "Average Chance",
            message: "Consider alternative boarding stations."
        };
    }

    return {
        stars: "⭐☆☆☆☆",
        title: "Low Chance",
        message: "Try another train or boarding station."
    };

}