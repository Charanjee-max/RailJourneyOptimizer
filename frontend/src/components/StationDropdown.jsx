function StationDropdown({
    label,
    value,
    stations,
    onChange
}) {
    return (
        <div style={{ marginTop: "15px" }}>

            <label>
                <strong>{label}</strong>
            </label>

            <br /><br />

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px"
                }}
            >
                {stations.map((station) => (
                    <option
                        key={station.sequence}
                        value={station.code}
                    >
                        {station.code} - {station.name}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default StationDropdown;