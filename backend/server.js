const express = require("express");
const cors = require("cors");
require("dotenv").config();

const trainRoutes = require("./routes/trainRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/train", trainRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "RailJourneyOptimizer Backend Running 🚆"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});