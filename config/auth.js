const { SECRET_JWT, JWT_LIVE } = process.env;

module.exports = {
    JWT: {
        secret: SECRET_JWT,
        live: JWT_LIVE
    }
}