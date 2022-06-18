const logger = require("../utils/logger.js");
const stationStore = require("../models/station-store.js");

const dashboard = {
  async index(request, response) {
    logger.info("dashboard rendering");

    const stations = await stationStore.getStations();

    let stationDetails = [];
    for (const stationId of stations){
      const station = await stationStore.getStation(stationId);
      stationDetails.push(station);
    }


    const viewData = {
      title: "Dashboard",
      stationdetails: stationDetails,
    };
    response.render("dashboard", viewData);
  }
};

module.exports = dashboard;
