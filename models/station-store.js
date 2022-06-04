const logger = require("../utils/logger.js");

const stationStore = {
    async getStations() {
        try {

            let stations = [1, 2];

            return stations;
        } catch (e) {
            logger.error("Error fetching stations", e);
        }
    },
    async getStation(id) {
        try {
            const weatherData = {
                id: 1,
                temperature: 123,
                weather: 123,
                wind: 123,
                pressure: 123
            };

            const station = {
                id: id,
                name: "Regensburg",
                data: [weatherData, weatherData, weatherData]
            };

            return station;
        } catch (e) {
            logger.error("Error fetching station", e);
        }
    },
};

module.exports = stationStore;
