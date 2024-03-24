const { Router } = require("express");
const router = Router();

const tryCatch = require("../../middleware/tryCatch.js")
const { getWeatherInformation } = require("./weatherController.js")

router.use("/healthCheck", (req, res) => res.send({ status: "success", message: "Weather service is working !!" }))

router.get("/:location_id", tryCatch(getWeatherInformation))


module.exports = router;
