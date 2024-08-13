const swaggerJsdoc = require('swagger-jsdoc');
const { PORT } = require('./config/config');
// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'ApiGatewayUS',
        version: '1.0.0',
        description: 'Hway connect'
    },
    servers: [
        {
            url: `http://localhost:${PORT}/api/v1`,
            description: 'Local server'
        }
    ]
};

// Options for the swagger-jsdoc
const options = {
    definition: swaggerDefinition,
    apis: ['./src/routes/*.js']
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;