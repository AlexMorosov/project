const logger = require("../utils/logger.js");
const dataStore = require("./data-store.js");
const dataStoreClient = dataStore.getDataStore();

const stationStore = {
    async getStations() {
        try {
            const query = 'SELECT * FROM stations';
            let result = await dataStoreClient.query(query);

            let stations = [];
            for(let item of result.rows){
                let station = item;
                let data = [];

                const weatherQuery = 'SELECT * FROM weatherdata WHERE stationid=$1';
                const weatherValues = [item.id];
                let weatherResult = await dataStoreClient.query(weatherQuery, weatherValues);

                for(let item of weatherResult.rows){
                    data.push(item);
                }

                station.data = data;
                stations.push(station);
            }

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
    },
    async addMeasuring(stationId, newMeasuring) {
        const query = 'INSERT INTO weatherdata (WEATHER, TEMPERATURE, WIND, PRESSURE, this.id) VALUES($1, $2, $3, $4, $5)';
        const values = [newMeasuring.weather, newMeasuring.temperature, newMeasuring.wind,newMeasuring.pressure, stationId];

        try {
            await dataStoreClient.query(query, values);
        } catch (e) {
            logger.error("Error adding Measuring", e);
        }
    },
    async addStation(stationId, newStation) {
        const query = 'INSERT INTO stations (NAME, LAT, LON) VALUES($1, $2, $3)';
        const values = [newStation.name, newStation.lat, newStation.lon];

        try {
            await dataStoreClient.query(query, values);
        } catch (e) {
            logger.error("Error adding Station", e);
        }
    }
};


module.exports = stationStore;
