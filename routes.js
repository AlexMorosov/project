const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const dashboard = require("./controllers/dashboard.js");
const station = require("./controllers/station.js");
const stationDetails = require("./controllers/stationDetails.js");

router.get("/", home.index);
router.get("/dashboard", dashboard.index);
router.get("/station/:id", station.index);
router.get("/stationDetails/:id",stationDetails.index);

module.exports = router;
