const logger = require("../utils/logger.js");

const stationStore = {
    async getStations() {
        try {
            const station1 = {
                name: "Regensburg",
                temperature: 123,
                weather: 123,
                wind: 123,
                pressure: 123
            };

            const station2 = {
                name: "Nittendorf",
                temperature: 123,
                weather: 123,
                wind: 123,
                pressure: 123
            };

            let stations = [station1, station2];

            return stations;
        } catch (e) {
            logger.error("Error fetching playlist", e);
        }
    }
};

module.exports = stationStore;
