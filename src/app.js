const express = require('express');
const bodyParser = require('body-parser');
const subscriberRoutes = require('./routes/subscriberRoutes');
// const errorHandler = require('./middlewares/errorHandler');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocs = require('./swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Swagger setup
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API routes
app.use('/api/v1',subscriberRoutes);

// Error handling middleware
// app.use(errorHandler);

module.exports = app;