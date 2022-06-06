const logger = require("../utils/logger.js");
const stationDetailsStore = require("../models/StationDetails-store.js");

const stationDetails = {
    async index(request, response) {
        const stationId = request.params.id;
        const station = await stationDetailsStore.getStationDetails();
        const viewData = {
            title: "Station",
            stationdetails: station,
        };
        response.render("station", viewData);
    }
};

module.exports = stationDetails;
