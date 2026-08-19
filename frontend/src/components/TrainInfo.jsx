function TrainInfo({ train }) {

    if (!train) {
        return null;
    }

    return (
        <div className="train-info">

            <h2>{train.trainName}</h2>

            <p>
                <strong>Train Number:</strong> {train.trainNumber}
            </p>

            <p>
                <strong>Source:</strong> {train.source.code} - {train.source.name}
            </p>

            <p>
                <strong>Destination:</strong> {train.destination.code} - {train.destination.name}
            </p>

        </div>
    );

}

export default TrainInfo;