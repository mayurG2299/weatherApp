const express = require("express");
const routes = require("./routes")

const server = express();

const NODE_ENV = process.env.NODE_ENV;

// .env file handling
const path = require("path")
require('dotenv').config({ path: path.resolve(__dirname, `./config/.${NODE_ENV}`) })

// console.log(process.env.port)
const port = process.env.port || 3000

// console.log("port", port)

server.use("/healthCheck", function (req, res) {
    res.send(`Server is working !!`)
})

// for handlig json format
server.use(express.json());

//routes --- env/route
server.use(`/${NODE_ENV}`, routes);

server.listen(port, () => console.log(`server is running on port ${port}`))
