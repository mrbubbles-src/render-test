require("dotenv").config();

const environment = process.env.NODE_ENV || "development";

console.log("environment", environment);
console.log("NODE_ENV", process.env.NODE_ENV);

const config = {
    development: {
        apiKey: "halloIchBinEinOpenApiKey",
        host: "localhost",
        port: 3000,
        devMode: true,
    },
    production: {
        apiKey: process.env.API_KEY,
        host: process.env.DB_HOST,
        port: parseInt(process.env.PORT),
        devMode: false,
    },
};
module.exports = config[environment];
