### Real-time Weather Forecast API

## Overview

This project implements a RESTful API for providing real-time weather forecasts based on geographical locations. Users can manage locations, retrieve weather forecasts and more. The API integrates with an external weather service to fetch real-time weather data and implements caching mechanisms to optimize performance.

## Installation

To install the necessary dependencies, run the following command:
npm install

## Database Setup

This project uses SQL for database management, with Sequelize as the ORM. Make sure to set up your SQL database and configure the connection details in the config .env file present according to the environment.

## External API Used

This project uses api given by openweathermap for getting the weather information

## Running the Server

To start the server in development mode, use the following command:
npm run dev

This command will run the server using nodemon, which automatically restarts the server whenever changes are detected in the code.

Endpoints
GET /locations/:location_id: Get a specific location by ID.
POST /locations/: Get add location details.
PUT /locations/:location_id: Update a specific location by ID.
DELETE /locations/:location_id: Delete a specific location by ID.
GET /weather/:location_id: Get the weather forecast for a specific location.

## Rate Limiting

This API implements rate limiting to prevent abuse. The rate limiting configuration can be found in the middleware/rateLimiter.js file.

## Caching

In-memory caching is implemented using the NodeCache library to optimize performance by reducing the number of external API calls.The configuration can be found in the middleware/cachingHandler.js file.

## Logging

API requests are logged, especially those interacting with the external weather service, for monitoring and debugging purposes.It is logged by making use of a logging middleware.The configuration of this middleware can be found in middleware/logResponse.js file. Logs are stored in root directory inside logs folder. Middleware is capable of creating log folder and file inside it.
