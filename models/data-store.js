var pg = require("pg");
const logger = require("../utils/logger.js");
const conString = "postgres://vzqgnpgclvbcvc:fef7ad32782f3b710445739f5194a58c36a9b4f4239fa13d1efabae23733ee67@ec2-34-247-72-29.eu-west-1.compute.amazonaws.com:5432/d8uqs6ad6cn5sd";

const dbConfig = {
    connectionString: conString,
    ssl: { rejectUnauthorized: false }
}

if (conString == undefined) {
    logger.error("ERROR: environment variable DB_CON_STRING not set.");
    process.exit(1);
}

let dbClient = null;

const dataStore = {
    getDataStore() {
        if (dbClient !== null) {
            return dbClient;
        } else {
            dbClient = new pg.Client(dbConfig);
            dbClient.connect();
            return dbClient;
        }
    },
    async endConnection() {
        await dbClient.end();
    }
}

module.exports = dataStore;