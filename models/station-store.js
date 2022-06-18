const logger = require("../utils/logger.js");
const dataStore = require("./data-store.js");
const dataStoreClient = dataStore.getDataStore();

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
            const query = 'SELECT * FROM stations WHERE id=$1';
            const values = [id];
            let result = await dataStoreClient.query(query, values);

            const weatherQuery = 'SELECT * FROM weatherdata WHERE stationid=$1';
            const weatherValues = [id];
            let weatherResult = await dataStoreClient.query(weatherQuery, weatherValues);

            const station = {
                id: id,
                name: result.rows[0].name,
                data: weatherResult.rows
            };

            return station;
        } catch (e) {
            logger.error("Error fetching station", e);
        }
    }
};

module.exports = stationStore;
