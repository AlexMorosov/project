const logger = require("../utils/logger.js");
const stationStore = require("../models/station-store.js");

const dashboard = {
  async index(request, response) {
    logger.info("dashboard rendering");

    const stations = await stationStore.getStations();

    const viewData = {
      title: "Dashboard",
      stationdetails: stations,
    };
    response.render("dashboard", viewData);
  },
  async addMeasuring(request, response) {

    const stationId = request.params.id;
    const newMeasuring = {
      weather: Number(request.body.weather),
      temperature: Number(request.body.temperature),
      wind: Number(request.body.wind),
      pressure: Number(request.body.pressure)
    };

    logger.debug("New Measuring", newMeasuring);
    await stationStore.addMeasuring(stationId, newMeasuring);
    response.redirect("/station/" + stationId);

  },
  async addStation(request, response) {

    const newStation = {
      name: request.body.neueStation,
      lat: Number(request.body.lat),
      lon: Number(request.body.lon)
    };
    logger.debug("Creating new Station", newStation);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");

  }

};

module.exports = dashboard;
