const logger = require("../utils/logger.js");
const stationStore = require("../models/station-store.js");
const stationDetailsStore = require("../models/StationDetails-store.js");

const dashboard = {
  async index (request, response) {
    logger.info("dashboard rendering");

    const stationDetails = await stationDetailsStore.getStationDetails();
    const stations = await stationStore.getStations();


    const viewData = {
      title: "Dashboard",
      stationdetails: stationDetails,
    };
    logger.info('about to render', stationDetails);
    response.render("dashboard", viewData);
  }
};

module.exports = dashboard;

