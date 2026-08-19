const express = require("express");

const router = express.Router();

const trainController = require("../controllers/trainController");

router.get("/health", (req, res) => {

    res.json({
        success: true,
        message: "Backend API is working 🚆"
    });

});

router.get("/:number", trainController.getTrainSchedule);

module.exports = router;