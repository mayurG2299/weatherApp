const express = require("express");

const server = express();

const port = 3000

server.use("/healthCheck", function (req, res) {
    res.send(`Server is working !!`)
})

server.listen(port, () => console.log(`server is running on port ${port}`))
