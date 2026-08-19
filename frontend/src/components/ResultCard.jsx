function ResultCard({ result }) {

    if (!result) {
        return null;
    }

    return (
        <div className="result-card">

            <div className="result-header">

                <h2>📊 Journey Analysis</h2>

                <h3>{result.recommendation.stars}</h3>

                <h4>{result.recommendation.title}</h4>

            </div>

            <div className="analysis-grid">

                <div className="info-box">
                    <span>📏 Travel Distance</span>
                    <strong>{result.distance} Stations</strong>
                </div>

                <div className="info-box">
                    <span>🎯 Seat Probability</span>
                    <strong>{result.probability}%</strong>
                </div>

                <div className="info-box">
                    <span>📈 Chance</span>
                    <strong>{result.level}</strong>
                </div>

            </div>

            <div className="recommendation-box">

                <h3>💡 Recommendation</h3>

                <p>{result.recommendation.message}</p>

            </div>

            <hr />

            <h2>🏆 Top 5 Boarding Recommendations</h2>

            <div className="recommendation-list">

                {result.topRecommendations.map((item, index) => (

                    <div
                        className="recommendation-card"
                        key={index}
                    >

                        <div className="recommendation-rank">

                            {index === 0 && "🥇"}
                            {index === 1 && "🥈"}
                            {index === 2 && "🥉"}
                            {index > 2 && `#${index + 1}`}

                        </div>

                        <div className="recommendation-details">

                            <h4>
                                {item.boarding.code}
                            </h4>

                            <p>
                                {item.boarding.name}
                            </p>

                        </div>

                        <div className="recommendation-score">

                            <strong>
                                Score: {item.score}
                            </strong>

                            <br />

                            Probability: {item.probability}%

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );

}

export default ResultCard;