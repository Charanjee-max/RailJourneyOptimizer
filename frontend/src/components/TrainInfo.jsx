function TrainInfo({ train }) {

    if (!train) {
        return null;
    }

    return (
        <div className="train-card">

            <div className="train-header">
                <h2>🚆 {train.trainName}</h2>
                <span className="train-number">
                    {train.trainNumber}
                </span>
            </div>

            <div className="train-route">

                <div className="station-box">

                    <h4>Source</h4>

                    <strong>{train.source.code}</strong>

                    <p>{train.source.name}</p>

                </div>

                <div className="route-arrow">
                    ➜
                </div>

                <div className="station-box">

                    <h4>Destination</h4>

                    <strong>{train.destination.code}</strong>

                    <p>{train.destination.name}</p>

                </div>

            </div>

        </div>
    );

}

export default TrainInfo;