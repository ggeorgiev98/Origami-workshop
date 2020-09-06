require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT,
        dbURL: process.env.DATABASE_URL,
        authCookieName: process.env.AUTH_COOKIE
    },
    production: {}
};

module.exports = config[env]