const { Router } = require("express");
const router = Router();

const location = require("./src/modules/location/locationRoutes")
const weather = require("./src/modules/weather/weatherRoutes")

router.use("/location", location)
router.use("/weather", weather)

module.exports = router;