const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const carsRouter = require('../cars/carsRouter');
const server = express();
server.use(helmet());
server.use(morgan('combined'));
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;