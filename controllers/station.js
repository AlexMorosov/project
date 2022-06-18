const logger = require("../utils/logger.js");
const stationStore = require("../models/station-store.js");

const station = {
    async index(request, response) {
        const stationId = request.params.id;
        const station = await stationStore.getStation(stationId);

        const viewData = {
            title: "Station",
            stationdetails: station,
        };
        response.render("station", viewData);
    }
};

module.exports = station;
