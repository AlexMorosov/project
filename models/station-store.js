const logger = require("../utils/logger.js");

const stationStore = {
    async getStations() {
        try {
            const weatherData = {
                id: 1, // PK
                stationId: 1, // FK
                temperature: 123,
                weather: 123,
                wind: 123,
                pressure: 123
            };

            const station1 = {
                id: 1, // PK
                name: "Regensburg", // Unique
                data: [weatherData, weatherData, weatherData]
            };

            const station2 = {
                id: 2, // PK
                name: "Nittendorf", // Unique
                data: [weatherData, weatherData, weatherData]
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
                id: id, // PK
                stationId: 1, // FK
                temperature: 123,
                weather: 123,
                wind: 123,
                pressure: 123
            };

            const station = {
                id: id, // PK
                name: "Regensburg", // Unique
                data: [weatherData, weatherData, weatherData]
            };

            return station;
        } catch (e) {
            logger.error("Error fetching station", e);
        }
    }
};

module.exports = stationStore;
