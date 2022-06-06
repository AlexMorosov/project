const dataStore = require("./data-store.js");
const dataStoreClient = dataStore.getDataStore();
const logger = require("../utils/logger.js");
const {warn} = require("winston");

const stationDetailsStore = {
    async getStationDetails() {
        const query = 'SELECT * FROM playlist2_songs';
        try {

            let result = await dataStoreClient.query(query) ;

            return result.rows;
        } catch (e) {
            logger.error("Error fetching stationDetails", e);
        }
    },
};


module.exports = stationDetailsStore;
