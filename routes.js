const { Router } = require("express");
const router = Router();

const location = require("./src/modules/location/locationRoutes")

router.use("/location", location)

module.exports = router;