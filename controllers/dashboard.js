const logger = require("../utils/logger.js");
const stationStore = require("../models/station-store.js");

const dashboard = {
  async index(request, response) {
    logger.info("dashboard rendering");

    const stations = await stationStore.getStations();
    const viewData = {
      title: "Dashboard",
      stations: stations,
    };
    response.render("dashboard", viewData);
  }
};

module.exports = dashboard;
