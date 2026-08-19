function StationDropdown({
    label,
    value,
    stations,
    onChange
}) {

    return (

        <div className="dropdown-group">

            <label className="dropdown-label">

                {label}

                <span className="required-star">
                    *
                </span>

            </label>

            <select
                className="dropdown-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >

                {stations.map((station) => (

                    <option
                        key={station.sequence}
                        value={station.code}
                    >
                        {station.code} — {station.name}
                    </option>

                ))}

            </select>

        </div>

    );

}

export default StationDropdown;