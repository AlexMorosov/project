const logger = require("../utils/logger.js");

const stationStore = {
    async getStations() {
        try {
            const station1 = {
                id: 1,
                name: "Regensburg",
                temperature: 123,
                weather: 123,
                wind: 123,
                pressure: 123
            };

            const station2 = {
                id: 2,
                name: "Nittendorf",
                temperature: 123,
                weather: 123,
                wind: 123,
                pressure: 123
            };

            let stations = [station1, station2];

            return stations;
        } catch (e) {
            logger.error("Error fetching stations", e);
        }
    },
    async getStation(id) {
        try {
            const weatherData = {
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
