require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URI: "",
    HWAY_URL: process.env.HWAY_URL 
};