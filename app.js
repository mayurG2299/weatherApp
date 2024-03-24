const express = require("express");
const server = express();
const path = require("path")

// .env file handling
const NODE_ENV = process.env.NODE_ENV;
require('dotenv').config({ path: path.resolve(__dirname, `./config/.${NODE_ENV}.env`) })

const routes = require("./routes")
const errorHandler = require("./src/middleware/errorHandler") // error handling middleware
const { cacheMiddleware } = require("./src/middleware/cachingHandler") // error handling node cache

// console.log(process.env.port)
const port = process.env.port || 3000

// for handlig json format
server.use(express.json());

server.use(cacheMiddleware); // caching middleware

//routes --- env/route
server.use(`/${NODE_ENV}`, routes);


server.use("/healthCheck", function (req, res) {
    res.send({ status: "success", message: "Server is working !!" })
})
server.all("*", (req, res, next) => {
    const err = new Error("Can Not Find the Endpoint !!")
    err.statusCode = 404
    err.status = "failure";
    next(err)
})

server.use(errorHandler)

server.listen(port, () => console.log(`server is running on port ${port}`))
