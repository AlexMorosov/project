const dataStore = require("./data-store.js");
const dataStoreClient = dataStore.getDataStore();
const logger = require("../utils/logger.js");
const {warn} = require("winston");

const stationStore = {
    async getStations() {
        const query = 'SELECT * FROM playlist2_playlists';
        try {

            let result = await dataStoreClient.query(query) ;

            return result.rows;
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
                id:id.title

            };
            return station;
        } catch (e) {
            logger.error("Error fetching station", e);
        }
    },
};

module.exports = stationStore;
