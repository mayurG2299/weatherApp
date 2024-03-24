const { Router } = require("express");
const router = Router();
const { getLocationByID, addLocation, updateLocationByID, deleteLocationBYID } = require("./locationController.js")
const tryCatch = require("../../middleware/tryCatch.js")

router.use("/healthCheck", (req, res) => res.send({ status: "success", message: "location service is working !!" }))
router.get("/:location_id", tryCatch(getLocationByID))
router.post("/", tryCatch(addLocation))
router.put("/:location_id", tryCatch(updateLocationByID))
router.delete("/:location_id", tryCatch(deleteLocationBYID))

module.exports = router;
